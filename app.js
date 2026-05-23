// ──────────────────────────────────────────────
//  Aviation Route Map — app.js
// ──────────────────────────────────────────────

// Load FIR rules from JSON (injected at build or fetched)
let FIR_RULES = {};
fetch('data/fir-rules.json')
  .then(r => r.json())
  .then(d => { FIR_RULES = d; });

// Map init — centered on Japan
const map = L.map('map', {
  center: [35, 135],
  zoom: 5,
  zoomControl: true,
  attributionControl: true,
});

// Tile layer: dark aviation-style
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap © CARTO',
  subdomains: 'abcd',
  maxZoom: 18,
}).addTo(map);

// Label layer on top (stays readable)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', {
  attribution: '',
  subdomains: 'abcd',
  maxZoom: 18,
  pane: 'shadowPane',
}).addTo(map);

// ── Layer groups ──────────────────────────────
const firLayer   = L.layerGroup();
const routeLayers = {};  // id → L.layerGroup

// ── State ─────────────────────────────────────
const activeRoutes = new Set();
let firVisible = true;
let userNotes = JSON.parse(localStorage.getItem('fir-user-notes') || '{}');

// ── Cloud Sync (GitHub Gist) ──────────────────
const GIST_FILENAME = 'avmap-notes.json';
let _gistPushTimer  = null;
let _pendingPush    = false;   // オフライン中に未送信の変更があるか

function cloudConfig() {
  return {
    token:  localStorage.getItem('avmap-gh-token') || '',
    gistId: localStorage.getItem('avmap-gist-id')  || '',
  };
}

function setCloudBtn(state) {   // 'idle' | 'offline' | 'syncing' | 'ok' | 'err'
  const btn = document.getElementById('cloud-btn');
  if (!btn) return;
  btn.className = btn.className.replace(/\s*(cloud-ok|cloud-err|cloud-syncing|cloud-offline)/g, '');
  if      (state === 'ok')      btn.classList.add('cloud-ok');
  else if (state === 'err')     btn.classList.add('cloud-err');
  else if (state === 'syncing') btn.classList.add('cloud-syncing');
  else if (state === 'offline') btn.classList.add('cloud-offline');
  // 'idle' = クラスなし（グレー）
}

async function fetchFromGist() {
  const { token, gistId } = cloudConfig();
  if (!token || !gistId) return null;
  const res = await fetch(`https://api.github.com/gists/${gistId}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const content = data.files?.[GIST_FILENAME]?.content;
  return content ? JSON.parse(content) : null;
}

async function pushToGist() {
  const { token, gistId } = cloudConfig();
  if (!token) return null;
  const body = {
    description: 'AVMAP FIR Notes',
    public: false,
    files: { [GIST_FILENAME]: { content: JSON.stringify(userNotes, null, 2) } },
  };
  const url    = gistId ? `https://api.github.com/gists/${gistId}` : 'https://api.github.com/gists';
  const method = gistId ? 'PATCH' : 'POST';
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (!gistId) localStorage.setItem('avmap-gist-id', data.id);
  return data;
}

function scheduleGistPush() {
  const { token } = cloudConfig();
  if (!token) return;
  _pendingPush = true;
  clearTimeout(_gistPushTimer);

  if (!navigator.onLine) {
    // オフライン中: ローカル保存済み・オンライン復帰時に自動プッシュ
    setCloudBtn('offline');
    return;
  }

  setCloudBtn('syncing');
  _gistPushTimer = setTimeout(async () => {
    try {
      await pushToGist();
      _pendingPush = false;
      setCloudBtn('ok');
    } catch (e) {
      console.warn('Gist push failed:', e);
      // ネットワーク系エラーは offline 扱い、認証エラー(401/403)は err
      setCloudBtn(e.message.includes('401') || e.message.includes('403') ? 'err' : 'offline');
    }
  }, 2000);
}

// オンライン復帰時: 未送信データを自動プッシュ
window.addEventListener('online', () => {
  setCloudBtn('idle');
  if (_pendingPush) scheduleGistPush();
});

window.addEventListener('offline', () => {
  if (cloudConfig().token) setCloudBtn('offline');
});

async function initCloudSync() {
  const { token, gistId } = cloudConfig();
  if (!token || !gistId) return;

  // オフライン時はローカルをそのまま使う（エラーにしない）
  if (!navigator.onLine) {
    setCloudBtn('offline');
    return;
  }

  try {
    setCloudBtn('syncing');
    const remote = await fetchFromGist();
    if (remote && typeof remote === 'object') {
      // リモートにあってローカルに無いキーだけマージ（ローカルの変更を守る）
      let changed = false;
      Object.entries(remote).forEach(([k, v]) => {
        if (!userNotes[k]) { userNotes[k] = v; changed = true; }
      });
      if (changed) localStorage.setItem('fir-user-notes', JSON.stringify(userNotes));
    }
    setCloudBtn('ok');
  } catch (e) {
    console.warn('Cloud init failed:', e);
    setCloudBtn(e.message.includes('401') || e.message.includes('403') ? 'err' : 'offline');
  }
}

function openCloudPanel() {
  const { token, gistId } = cloudConfig();
  const panel = document.getElementById('cloud-panel');
  const backdrop = document.getElementById('cloud-backdrop');
  panel.classList.remove('hidden');
  backdrop.classList.remove('hidden');

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="font-size:13px;font-weight:700;color:#58a6ff;">☁ Cloud Sync</div>
      <button id="cp-close" style="background:none;border:none;color:#8b949e;font-size:18px;cursor:pointer;line-height:1;padding:0 2px;">✕</button>
    </div>
    <div style="font-size:11px;color:#8b949e;margin-bottom:14px;line-height:1.6;">
      GitHub Gist にメモを自動保存・同期します。<br>
      <a id="cp-token-link" href="https://github.com/settings/tokens/new?scopes=gist&description=AVMAP+Notes" target="_blank" style="color:#58a6ff;">Personal Access Token を発行</a>（gist スコープのみ選択）
    </div>

    <div style="margin-bottom:10px;">
      <div class="cp-label">GitHub Token</div>
      <input id="cp-token" class="cloud-input" type="password" value="${token}" placeholder="ghp_xxxxxxxxxxxx" autocomplete="off">
    </div>
    <div style="margin-bottom:16px;">
      <div class="cp-label">Gist ID <span style="font-weight:400;text-transform:none;letter-spacing:0;color:#8b949e;">(初回は空白 → 自動作成)</span></div>
      <input id="cp-gist" class="cloud-input" type="text" value="${gistId}" placeholder="自動設定されます" autocomplete="off">
    </div>

    <button id="cp-sync" class="cp-sync-btn">☁ 今すぐ同期</button>
    <div id="cp-status" style="font-size:11px;text-align:center;margin-top:8px;min-height:16px;color:#8b949e;"></div>
  `;

  function setMsg(msg, color) {
    const el = document.getElementById('cp-status');
    if (el) { el.textContent = msg; el.style.color = color || '#8b949e'; }
  }

  function close() {
    panel.classList.add('hidden');
    backdrop.classList.add('hidden');
  }

  document.getElementById('cp-close').addEventListener('click', close);
  backdrop.addEventListener('click', close, { once: true });

  document.getElementById('cp-sync').addEventListener('click', async () => {
    const tok  = document.getElementById('cp-token').value.trim();
    const gid  = document.getElementById('cp-gist').value.trim();
    if (!tok) { setMsg('⚠ Token を入力してください', '#e3b341'); return; }

    localStorage.setItem('avmap-gh-token', tok);
    if (gid) localStorage.setItem('avmap-gist-id', gid);
    else     localStorage.removeItem('avmap-gist-id');

    const btn = document.getElementById('cp-sync');
    btn.disabled = true;
    setCloudBtn('syncing');

    try {
      if (localStorage.getItem('avmap-gist-id')) {
        setMsg('📥 Gist から読み込み中…', '#58a6ff');
        const remote = await fetchFromGist();
        if (remote) {
          Object.assign(userNotes, remote);
          localStorage.setItem('fir-user-notes', JSON.stringify(userNotes));
        }
      }
      setMsg('📤 アップロード中…', '#58a6ff');
      await pushToGist();
      const newId = localStorage.getItem('avmap-gist-id');
      document.getElementById('cp-gist').value = newId || '';
      setMsg('✅ 同期完了！', '#3fb950');
      setCloudBtn('ok');
    } catch (e) {
      setMsg(`⚠ エラー: ${e.message}`, '#f85149');
      setCloudBtn('err');
    } finally {
      btn.disabled = false;
    }
  });
}

// ── FIR boundaries ────────────────────────────
// Colors are pre-computed via graph coloring in fir-boundaries.js properties
// Adjacent FIRs get different colors automatically

FIR_BOUNDARIES.features.forEach(feature => {
  const id = feature.properties.id;
  const color = feature.properties.color || '#1e2530';

  const rawCoords = feature.geometry.coordinates[0];

  // 西半球のFIR（アメリカ・太平洋）は経度+360°して日本から見て東側に表示
  // 平均経度が -30° 未満 = Americas / Pacific → 東コピーにシフト
  const avgLng = rawCoords.reduce((s, [lng]) => s + lng, 0) / rawCoords.length;
  const shiftEast = avgLng < -30;

  // Convert GeoJSON [lng,lat] to Leaflet [lat,lng]
  const baseCoords = rawCoords.map(([lng, lat]) => [
    lat,
    shiftEast && lng < 0 ? lng + 360 : lng,
  ]);

  // 東西±360°コピーも描画して無限スクロールに対応
  [-360, 0, 360].forEach(offset => {
    const coords = baseCoords.map(([lat, lng]) => [lat, lng + offset]);

    const polygon = L.polygon(coords, {
      color: color,
      fillColor: color,
      fillOpacity: 0.3,
      weight: 2.5,
      dashArray: '4 3',
    });

    polygon.on('click', () => openFirPanel(id, feature.properties.label));

    // FIR label — use arithmetic centroid of vertices for visual center
    const latSum = coords.reduce((s, [lat]) => s + lat, 0);
    const lngSum = coords.reduce((s, [, lng]) => s + lng, 0);
    const centroid = L.latLng(latSum / coords.length, lngSum / coords.length);
    const labelText = feature.properties.label;
    const label = L.divIcon({
      className: '',
      html: `<div style="color:${color};font-size:13px;font-weight:700;
                         letter-spacing:0.5px;white-space:nowrap;
                         filter:brightness(1.8);
                         text-shadow:0 0 4px #fff,0 0 4px #fff,0 0 4px #fff;
                         cursor:pointer;padding:4px;
                         transform:translate(-50%,-50%);">
               ${labelText}
             </div>`,
      iconAnchor: [0, 0],
    });
    const labelMarker = L.marker(centroid, { icon: label, interactive: true });
    labelMarker.on('click', () => openFirPanel(id, feature.properties.label));
    labelMarker.addTo(firLayer);

    polygon.addTo(firLayer);
  });
});

firLayer.addTo(map);

// ── Airport markers ───────────────────────────
function airportIcon(icao) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:14px;height:14px;border-radius:50%;
      background:#f0f6fc;border:2px solid #0d1117;
      box-shadow:0 0 8px rgba(255,255,255,0.5);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

const airportMarkers = {};
Object.entries(AIRPORTS).forEach(([code, ap]) => {
  const [lat, lng] = ap.coords;
  // 東西±360°コピー（3つ）作成
  airportMarkers[code] = [-360, 0, 360].map(offset => {
    const marker = L.marker([lat, lng + offset], { icon: airportIcon(ap.icao) });
    marker.bindPopup(`
      <div class="popup-airport-name">${code} — ${ap.icao}</div>
      <div class="popup-icao">${ap.name}</div>
    `, { maxWidth: 200 });
    return marker;
  });
});

// ── CAUG 2-03 Airport markers ─────────────────
let caugAirportLayer = null;
let caugVisible = true;

const AIRPORT_TYPE_COLOR = { '◎': '#3fb950', '〇': '#58a6ff', '＊': '#e3b341' };
const AIRPORT_TYPE_LABEL = { '◎': '◎ 正規飛行場', '〇': '〇 その他の指定飛行場', '＊': '＊ Contingency Airport' };

function caugAirportIcon(icao, type) {
  const color = AIRPORT_TYPE_COLOR[type] || '#c9d1d9';
  // ◎正規 > 〇その他 > ＊Contingency
  const fontSize = type === '◎' ? 13 : type === '〇' ? 11 : 9;
  const dotSize  = type === '◎' ? 10 : type === '〇' ? 8  : 7;
  return L.divIcon({
    className: '',
    html: `<div style="display:flex;flex-direction:column;align-items:center;pointer-events:none">
      <div style="width:${dotSize}px;height:${dotSize}px;border-radius:50%;background:${color};border:1.5px solid #0d1117;box-shadow:0 0 5px ${color}88;"></div>
      <div style="font-size:${fontSize}px;font-weight:700;color:${color};text-shadow:0 0 3px #000,0 0 3px #000;margin-top:1px;white-space:nowrap;">${icao}</div>
    </div>`,
    iconSize: [40, 22],
    iconAnchor: [20, 4],
  });
}

function buildCaugPopupHtml(ap, color, typeLabel) {
  const notes = (typeof CAUG_NOTES_24 !== 'undefined') ? CAUG_NOTES_24[ap.icao] : null;

  let html = `<div class="popup-airport-name">${ap.icao}`;
  if (notes) html += ` <span style="font-size:11px;font-weight:400;color:#8b949e;">/${notes.iata}</span>`;
  html += `</div>`;
  html += `<div class="popup-icao">${notes ? notes.fullName : ap.name}</div>`;
  html += `<div style="font-size:11px;font-weight:700;color:${color};margin-top:6px;">${typeLabel}</div>`;

  if (notes) {
    // Info grid
    html += `<div style="display:grid;grid-template-columns:auto 1fr;gap:2px 8px;margin-top:8px;font-size:11px;line-height:1.5;">`;
    html += `<span style="color:#8b949e;">UTC</span><span>${notes.utc}</span>`;
    html += `<span style="color:#8b949e;">OPS</span><span>${notes.ops}</span>`;
    if (notes.curfew && notes.curfew !== 'Nil' && notes.curfew !== '—') {
      html += `<span style="color:#e3b341;">Curfew</span><span style="color:#e3b341;font-weight:700;">${notes.curfew}</span>`;
    } else {
      html += `<span style="color:#8b949e;">Curfew</span><span>${notes.curfew || 'Nil'}</span>`;
    }
    html += `<span style="color:#8b949e;">Fuel</span><span>${notes.fuel}</span>`;
    html += `<span style="color:#8b949e;">RFFS</span><span>${notes.rffs}</span>`;
    if (notes.prefRwy && notes.prefRwy !== '—') {
      html += `<span style="color:#8b949e;">PrefRWY</span><span>${notes.prefRwy}</span>`;
    }
    html += `</div>`;

    // Runway lengths & approach types
    if (notes.runways && notes.runways.length > 0) {
      html += `<div style="margin-top:8px;">`;
      html += `<div style="font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:#58a6ff;margin-bottom:4px;">Runways</div>`;
      html += `<div style="display:flex;flex-direction:column;gap:3px;">`;
      notes.runways.forEach(rwy => {
        const len = rwy.len;
        let lenColor, lenIcon;
        if (len < 2000) {
          lenColor = '#f85149'; lenIcon = '⚠️';
        } else if (len < 2500) {
          lenColor = '#e3b341'; lenIcon = '🟡';
        } else {
          lenColor = '#3fb950'; lenIcon = '🟢';
        }
        const apchBadge = rwy.apch
          ? `<span style="margin-left:6px;font-size:10px;background:#1c3a5e;color:#79c0ff;border-radius:3px;padding:0 4px;">${rwy.apch}</span>`
          : '';
        html += `<div style="font-size:11px;display:flex;align-items:center;gap:4px;">`;
        html += `<span style="color:#8b949e;min-width:48px;">RWY ${rwy.id}</span>`;
        html += `<span style="color:${lenColor};font-weight:700;">${lenIcon} ${len.toLocaleString()}m</span>`;
        html += apchBadge;
        html += `</div>`;
      });
      html += `</div></div>`;
    }

    // Sections
    notes.sections.forEach(sec => {
      html += `<div style="margin-top:8px;">`;
      html += `<div style="font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:#58a6ff;margin-bottom:3px;">${sec.title}</div>`;
      html += `<ul style="margin:0;padding-left:12px;font-size:11px;line-height:1.55;color:#c9d1d9;">`;
      sec.items.forEach(item => {
        html += `<li style="margin-bottom:2px;">${item}</li>`;
      });
      html += `</ul></div>`;
    });

    html += `<div style="font-size:10px;color:#8b949e;margin-top:8px;border-top:1px solid #30363d;padding-top:6px;">CAUG 2-03 §2.4 / 1-03 §3.2.1.1 B787</div>`;
  } else {
    html += `<div style="font-size:10px;color:#8b949e;margin-top:2px;">CAUG 1-03 §3.2.1.1 B787</div>`;
  }

  return html;
}

function buildCaugLayer() {
  const layer = L.layerGroup();
  CAUG_AIRPORTS.forEach(ap => {
    const [lat, baseLng] = ap.coords;
    const color = AIRPORT_TYPE_COLOR[ap.type] || '#c9d1d9';
    const typeLabel = AIRPORT_TYPE_LABEL[ap.type] || ap.type;
    const hasNotes = (typeof CAUG_NOTES_24 !== 'undefined') && !!CAUG_NOTES_24[ap.icao];
    const popupHtml = buildCaugPopupHtml(ap, color, typeLabel);
    [-360, 0, 360].forEach(offset => {
      const marker = L.marker([lat, baseLng + offset], { icon: caugAirportIcon(ap.icao, ap.type) });
      marker.bindPopup(popupHtml, {
        maxWidth: hasNotes ? 300 : 240,
        maxHeight: 400,
      });
      marker.addTo(layer);
    });
  });
  return layer;
}

// ── Route lines ───────────────────────────────
function buildRouteLayer(group) {
  const layer = L.layerGroup();

  Object.entries(group.routes).forEach(([routeKey, coords]) => {
    [-360, 0, 360].forEach(offset => {
      const shiftedCoords = coords.map(([lat, lng]) => [lat, lng + offset]);
      // Forward route
      const line = L.polyline(shiftedCoords, {
        color: group.color,
        weight: 2.5,
        opacity: 0.85,
        smoothFactor: 1,
      });
      line.bindPopup(`<b style="color:${group.color}">${routeKey}</b><br>
        <span style="font-size:11px;color:#8b949e">Approx. corridor — update with OFP route</span>`);
      line.addTo(layer);

      // Return route (reverse, dashed)
      if (group.bidirectional) {
        const returnKey = routeKey.split('-').reverse().join('-');
        const returnLine = L.polyline([...shiftedCoords].reverse(), {
          color: group.color,
          weight: 2,
          opacity: 0.55,
          dashArray: '6 4',
        });
        returnLine.bindPopup(`<b style="color:${group.color}">${returnKey}</b><br>
          <span style="font-size:11px;color:#8b949e">Approx. corridor — update with OFP route</span>`);
        returnLine.addTo(layer);
      }
    });
  });

  // Airport markers for this group
  group.airports.forEach(code => {
    if (airportMarkers[code]) airportMarkers[code].forEach(m => m.addTo(layer));
  });

  return layer;
}

ROUTE_GROUPS.forEach(group => {
  routeLayers[group.id] = buildRouteLayer(group);
});

// ── OFP exact routes ──────────────────────────

// 2点間の距離をnmで計算（簡易版）
function distNm(lat1, lng1, lat2, lng2) {
  const dlat = (lat2 - lat1) * 60;
  const dlng = (lng2 - lng1) * 60 * Math.cos(lat1 * Math.PI / 180);
  return Math.sqrt(dlat * dlat + dlng * dlng);
}

// "FIRWPT" / "FIR WPT" 等のプレースホルダ名を N25E165 形式の座標名で表示
// 座標形式WPT名（35N140E など）も同様に正規化して表示
const FIR_WPT_PLACEHOLDER = /^FIR[\s_]?WPT\d*$/i;

// lat/lng → N25E165 形式（航空オーシャニックFIX標準表記）
function formatFirCoord(lat, shiftedLng) {
  // +360°シフトされた西経を元に戻す
  const lng = shiftedLng > 180 ? shiftedLng - 360 : shiftedLng;
  const ns  = lat >= 0 ? 'N' : 'S';
  const ew  = lng >= 0 ? 'E' : 'W';
  const latD = String(Math.round(Math.abs(lat))).padStart(2, '0');
  const lngD = String(Math.round(Math.abs(lng))).padStart(3, '0');
  return `${ns}${latD}${ew}${lngD}`;
}

function resolveFirWptName(wpts, idx) {
  const w = wpts[idx];
  // FIRWPT プレースホルダ → 座標名に変換
  if (FIR_WPT_PLACEHOLDER.test(w.name)) {
    const [lat, lng] = w.coords;
    return formatFirCoord(lat, lng);
  }
  return w.name;
}

// 連続するウェイポイント間で経度差が180°を超えないよう正規化
// (Polar/Transatlantic路線の日付変更線跨ぎに対応)
function normalizeWaypointLngs(waypoints) {
  if (!waypoints.length) return waypoints;
  const out = [{ ...waypoints[0] }];
  for (let i = 1; i < waypoints.length; i++) {
    const prevLng = out[i - 1].coords[1];
    let lng = waypoints[i].coords[1];
    while (lng - prevLng >  180) lng -= 360;
    while (lng - prevLng < -180) lng += 360;
    out.push({ ...waypoints[i], coords: [waypoints[i].coords[0], lng] });
  }
  return out;
}

// Returns a LayerGroup containing the polyline + FIR-boundary diamond markers.
// Polar/Transpolar routes (Japan↔Europe via North Pole) are handled via
// sequential longitude normalization to avoid crossing-line artifacts.
function ofpPolyline(routeId, color, dashed) {
  const route = OFP_ROUTES[routeId];
  if (!route) return null;

  const group = L.layerGroup();

  // 1. 順次経度を正規化（隣接点間の跳びを解消）
  const normalized = normalizeWaypointLngs(route.waypoints);
  // 2. 正規化後の平均経度で全体シフトを決定
  const avgLng = normalized.reduce((s, w) => s + w.coords[1], 0) / normalized.length;
  const shift = avgLng < -30 ? 360 : 0;
  const baseWaypoints = normalized.map(w => ({
    ...w, coords: [w.coords[0], w.coords[1] + shift],
  }));

  // 東西±360°コピーも描画して無限スクロールに対応
  [-360, 0, 360].forEach(offset => {
    const waypoints = baseWaypoints.map(w => ({
      ...w, coords: [w.coords[0], w.coords[1] + offset],
    }));

    const coords = waypoints.map(w => w.coords);
    const line = L.polyline(coords, {
      color,
      weight: dashed ? 2 : 2.5,
      opacity: dashed ? 0.6 : 0.85,
      dashArray: dashed ? '6 4' : null,
      smoothFactor: 1,
    });
    line.on('click', (e) => {
      L.DomEvent.stopPropagation(e);
      openRouteFirPanel(route);
    });
    line.addTo(group);

    // FIR boundary crossing markers — diamond + WPT name label
    // ツールチップはメインコピー（offset=0）のみ（パフォーマンス最適化）
    waypoints.forEach((w, i) => {
      if (!w.fir) return;
      const displayName = resolveFirWptName(waypoints, i);
      const firMarker = L.marker(w.coords, {
        icon: L.divIcon({
          className: '',
          html: `<div class="fir-wpt-label">
                   <div class="fir-diamond" style="background:${color};border-color:rgba(0,0,0,0.5);"></div>
                   <span class="fir-wpt-name" style="color:${color};">${displayName}</span>
                 </div>`,
          iconSize: [80, 14],
          iconAnchor: [5, 7],
        }),
        interactive: offset === 0,
        zIndexOffset: 100,
      });
      if (offset === 0) {
        firMarker.bindTooltip(
          `<span class="fir-tip-fir" style="color:${color};">${w.fir}</span> FIR`,
          { className: 'fir-tip', direction: 'top', offset: [0, -8] }
        );
      }
      firMarker.addTo(group);
    });
  });

  return group;
}

// 日本発着判定: 出発ICAOが日本空港 → 実線、到着が日本 → 点線
const JAPAN_ICAO = new Set(['RJTT', 'RJAA', 'RJBB', 'RJOO', 'RJCC', 'ROAH']);

function isJapanDep(routeId) {
  return JAPAN_ICAO.has(routeId.split('-')[0]);
}

const OFP_GROUPS = [
  // ── Northeast Asia ──────────────────────────────────────────────
  // 新規路線追加: 同じ目的地なら routeIds に追加、airports に空港コード追加
  { id: 'ofp-gmp',  shortName: 'GMP', color: '#4A90D9',
    routeIds: ['RJTT-RKSS', 'RKSS-RJTT'],
    airports: ['HND', 'GMP'] },
  { id: 'ofp-pek',  shortName: 'PEK', color: '#F39C12',
    routeIds: ['RJTT-ZBAA', 'ZBAA-RJTT'],
    airports: ['HND', 'PEK'] },
  { id: 'ofp-dlc',  shortName: 'DLC', color: '#8E44AD',
    routeIds: ['RJTT-ZYTL', 'ZYTL-RJTT'],
    airports: ['HND', 'DLC'] },
  { id: 'ofp-sha',  shortName: 'SHA', color: '#D35400',
    routeIds: ['RJTT-ZSSS', 'ZSSS-RJTT'],
    airports: ['HND', 'SHA'] },
  { id: 'ofp-pvg',  shortName: 'PVG', color: '#E67E22',
    routeIds: ['RJTT-ZSPD', 'ZSPD-RJTT'],
    airports: ['HND', 'PVG'] },
  { id: 'ofp-tsa',  shortName: 'TSA', color: '#2ECC71',
    routeIds: ['RJTT-RCSS', 'RCSS-RJTT'],
    airports: ['HND', 'TSA'] },
  { id: 'ofp-can',  shortName: 'CAN', color: '#FFB8C9',
    routeIds: ['RJTT-ZGGG', 'ZGGG-RJTT'],
    airports: ['HND', 'CAN'] },
  { id: 'ofp-mnl',  shortName: 'MNL', color: '#C9B8FF',
    routeIds: ['RJTT-RPLL', 'RPLL-RJAA'],
    airports: ['HND', 'NRT', 'MNL'] },
  // ── South Asia ──────────────────────────────────────────────────
  { id: 'ofp-del',  shortName: 'DEL', color: '#FFE5B8',
    routeIds: ['RJTT-VIDP', 'VIDP-RJTT'],
    airports: ['HND', 'DEL'] },
  // ── Southeast Asia ──────────────────────────────────────────────
  { id: 'ofp-hkg',  shortName: 'HKG', color: '#C0392B',
    routeIds: ['RJAA-VHHH', 'VHHH-RJAA', 'RJTT-VHHH', 'VHHH-RJTT'],
    airports: ['NRT', 'HND', 'HKG'] },
  { id: 'ofp-bkk',  shortName: 'BKK', color: '#F1C40F',
    routeIds: ['RJTT-VTBS', 'VTBS-RJTT', 'VTBS-RJAA', 'VTBS-RJBB', 'VTBS-RJAA-2', 'RJAA-VTBS-2', 'VTBS-RJBB-2', 'RJBB-VTBS-2'],
    airports: ['HND', 'NRT', 'KIX', 'BKK'] },
  { id: 'ofp-sgn',  shortName: 'SGN', color: '#16A085',
    routeIds: ['RJTT-VVTS', 'VVTS-RJTT', 'RJAA-VVTS', 'VVTS-RJAA'],
    airports: ['HND', 'NRT', 'SGN'] },
  { id: 'ofp-sin',  shortName: 'SIN', color: '#E74C3C',
    routeIds: ['RJAA-WSSS', 'WSSS-RJAA', 'RJTT-WSSS', 'WSSS-RJTT'],
    airports: ['NRT', 'HND', 'SIN'] },
  { id: 'ofp-cgk',  shortName: 'CGK', color: '#27AE60',
    routeIds: ['RJAA-WIII', 'WIII-RJAA'],
    airports: ['NRT', 'CGK'] },
  { id: 'ofp-kul',  shortName: 'KUL', color: '#1ABC9C',
    routeIds: ['RJAA-WMKK', 'WMKK-RJAA'],
    airports: ['NRT', 'KUL'] },
  // ── Pacific (日付変更線越え — 初期オフ) ─────────────────────────
  { id: 'ofp-yvr',  shortName: 'YVR', color: '#5DADE2',
    routeIds: ['RJAA-CYVR', 'CYVR-RJAA'],
    airports: ['NRT', 'YVR'], defaultOff: true },
  { id: 'ofp-hnl',  shortName: 'HNL', color: '#A569BD',
    routeIds: ['RJAA-PHNL', 'RJAA-PHNL-2', 'RJAA-PHNL-3', 'PHNL-RJBB-2'],
    airports: ['NRT', 'KIX', 'HNL'], defaultOff: true },
  // ── North America (long-haul) ────────────────────────────────────────
  { id: 'ofp-ord',  shortName: 'ORD', color: '#E67E22',
    routeIds: ['RJAA-KORD', 'KORD-RJAA'],
    airports: ['NRT', 'ORD'], defaultOff: true },
  { id: 'ofp-bos',  shortName: 'BOS', color: '#E74C3C',
    routeIds: ['RJAA-KBOS', 'KBOS-RJAA'],
    airports: ['NRT', 'BOS'], defaultOff: true },
  { id: 'ofp-san',  shortName: 'SAN', color: '#F39C12',
    routeIds: ['RJAA-KSAN', 'KSAN-RJAA'],
    airports: ['NRT', 'SAN'], defaultOff: true },
  { id: 'ofp-dfw',  shortName: 'DFW', color: '#8E44AD',
    routeIds: ['RJTT-KDFW', 'KDFW-RJTT'],
    airports: ['HND', 'DFW'], defaultOff: true },
  // ── Europe ───────────────────────────────────────────────────────────
  { id: 'ofp-lhr',  shortName: 'LHR', color: '#3498DB',
    routeIds: ['EGLL-RJTT', 'RJTT-EGLL-2', 'EGLL-RJTT-2', 'EGLL-RJTT-3'],
    airports: ['HND', 'LHR'], defaultOff: true },
  { id: 'ofp-cdg',  shortName: 'CDG', color: '#5B6BC8',
    routeIds: ['LFPG-RJTT', 'RJTT-LFPG-2'],
    airports: ['HND', 'CDG'], defaultOff: true },
  { id: 'ofp-hel',  shortName: 'HEL', color: '#BDC3C7',
    routeIds: ['RJTT-EFHK-2'],
    airports: ['HND', 'HEL'], defaultOff: true },
  { id: 'ofp-fra',  shortName: 'FRA', color: '#C0392B',
    routeIds: ['EDDF-RJAA', 'RJAA-EDDF-2', 'RJAA-EDDF-3', 'EDDF-RJAA-2', 'EDDF-RJAA-3', 'EDDF-RJAA-4', 'EDDF-RJAA-5', 'RJAA-EDDF-4'],
    airports: ['NRT', 'FRA'], defaultOff: true },
  // ── Australia ────────────────────────────────────────────────────────
  { id: 'ofp-syd',  shortName: 'SYD', color: '#27AE60',
    routeIds: ['RJTT-YSSY', 'YSSY-RJTT'],
    airports: ['HND', 'SYD'], defaultOff: true },
  { id: 'ofp-mel',  shortName: 'MEL', color: '#16A085',
    routeIds: ['RJAA-YMML', 'YMML-RJAA'],
    airports: ['NRT', 'MEL'], defaultOff: true },
  // ── South Asia (long-haul) ───────────────────────────────────────────
  { id: 'ofp-blr',  shortName: 'BLR', color: '#9B59B6',
    routeIds: ['RJAA-VOBL', 'VOBL-RJAA'],
    airports: ['NRT', 'BLR'], defaultOff: true },
];

OFP_GROUPS.forEach(group => {
  const layer = L.layerGroup();
  group.routeIds.forEach(rid => {
    // 日本発 → 実線、日本着 → 点線（出発ICAOで判定）
    const dashed = !isJapanDep(rid);
    const line = ofpPolyline(rid, group.color, dashed);
    if (line) line.addTo(layer);
  });
  // OFP group airports: per-group markers → tap opens route FIR memo panel
  group.airports.forEach(code => {
    const ap = AIRPORTS[code];
    if (!ap) return;
    const [lat, baseLng] = ap.coords;
    [-360, 0, 360].forEach(offset => {
      const m = L.marker([lat, baseLng + offset], { icon: airportIcon(code) });
      m.on('click', e => { L.DomEvent.stopPropagation(e); openRouteMemoPanel(group); });
      m.addTo(layer);
    });
  });
  routeLayers[group.id] = layer;
});

// ── Header collapse ───────────────────────────
const headerCollapseBtn = document.getElementById('header-collapse-btn');
const headerBody = document.getElementById('header-body');
headerCollapseBtn.addEventListener('click', () => {
  headerBody.classList.toggle('collapsed');
  headerCollapseBtn.classList.toggle('collapsed');
  setTimeout(() => map.invalidateSize(), 260);
});

// ── Route toggle buttons ──────────────────────
const toggleContainer = document.getElementById('route-toggles');

ROUTE_GROUPS.forEach(group => {
  const btn = document.createElement('button');
  btn.className = 'route-btn';
  btn.textContent = group.shortName;
  btn.style.borderColor = group.color;
  btn.style.backgroundColor = 'transparent';
  btn.style.color = '#c9d1d9';

  btn.addEventListener('click', () => {
    if (activeRoutes.has(group.id)) {
      activeRoutes.delete(group.id);
      map.removeLayer(routeLayers[group.id]);
      btn.classList.remove('active');
      btn.style.backgroundColor = 'transparent';
      btn.style.color = '#c9d1d9';
    } else {
      activeRoutes.add(group.id);
      routeLayers[group.id].addTo(map);
      btn.classList.add('active');
      btn.style.backgroundColor = group.color;
      btn.style.color = '#0d1117';
    }
  });

  toggleContainer.appendChild(btn);
  // デフォルトは非表示（ユーザーが明示的に選択するまで何も表示しない）
});

// OFP route toggle buttons
OFP_GROUPS.forEach(group => {
  const btn = document.createElement('button');
  btn.className = 'route-btn';
  btn.textContent = group.shortName;
  btn.style.borderColor = group.color;
  btn.style.backgroundColor = 'transparent';
  btn.style.color = '#c9d1d9';

  btn.addEventListener('click', () => {
    if (activeRoutes.has(group.id)) {
      activeRoutes.delete(group.id);
      map.removeLayer(routeLayers[group.id]);
      btn.classList.remove('active');
      btn.style.backgroundColor = 'transparent';
      btn.style.color = '#c9d1d9';
    } else {
      activeRoutes.add(group.id);
      routeLayers[group.id].addTo(map);
      btn.classList.add('active');
      btn.style.backgroundColor = group.color;
      btn.style.color = '#0d1117';
    }
  });

  toggleContainer.appendChild(btn);
  // デフォルトは全路線非表示
});

// FIR tap hint (shows briefly on first load)
function showFirHint() {
  let hint = document.getElementById('fir-hint');
  if (!hint) {
    hint = document.createElement('div');
    hint.id = 'fir-hint';
    hint.textContent = 'ℹ FIRエリアまたはラベルをタップ → 情報表示';
    document.body.appendChild(hint);
  }
  hint.classList.remove('fade');
  clearTimeout(hint._timer);
  hint._timer = setTimeout(() => hint.classList.add('fade'), 3000);
}

// CAUG 2-03 airport toggle button
const caugBtn = document.getElementById('caug-toggle-btn');
caugBtn.addEventListener('click', () => {
  if (caugVisible) {
    if (caugAirportLayer) map.removeLayer(caugAirportLayer);
    caugBtn.classList.remove('active');
  } else {
    if (!caugAirportLayer) caugAirportLayer = buildCaugLayer();
    caugAirportLayer.addTo(map);
    caugBtn.classList.add('active');
  }
  caugVisible = !caugVisible;
});
// Initialize CAUG layer ON by default
caugAirportLayer = buildCaugLayer();
caugAirportLayer.addTo(map);
caugBtn.classList.add('active');

// FIR toggle button
const firBtn = document.getElementById('fir-toggle-btn');
firBtn.addEventListener('click', () => {
  if (firVisible) {
    map.removeLayer(firLayer);
    firBtn.classList.remove('active');
  } else {
    firLayer.addTo(map);
    firBtn.classList.add('active');
    showFirHint();
  }
  firVisible = !firVisible;
});
firBtn.classList.add('active');
// Show hint on first load
setTimeout(showFirHint, 1500);

// 'i' key toggles FIR layer
document.addEventListener('keydown', e => {
  if ((e.key === 'i' || e.key === 'I') && !e.ctrlKey && !e.metaKey && !e.altKey) {
    firBtn.click();
  }
});

// ── Route FIR Memo Panel ─────────────────────
// OFP空港マーカーをタップ → ルートが通過するFIR一覧＋メモ付箋を右サイドに表示
function openRouteMemoPanel(group) {
  // 往路（Japan dep）と復路（Japan arr）でFIRを別々に収集
  const outFirs = [], retFirs = [];
  const seenOut = new Set(), seenRet = new Set();

  group.routeIds.forEach(rid => {
    const route = OFP_ROUTES[rid];
    if (!route) return;
    const isOut = isJapanDep(rid);
    const list = isOut ? outFirs : retFirs;
    const seen = isOut ? seenOut : seenRet;
    route.waypoints.forEach(w => {
      if (w.fir && !seen.has(w.fir)) { seen.add(w.fir); list.push(w.fir); }
    });
  });

  const panel = document.getElementById('route-memo-panel');
  const hasOut = outFirs.length > 0;
  const hasRet = retFirs.length > 0;

  if (!hasOut && !hasRet) {
    panel.innerHTML = `
      <div class="memo-panel-header">
        <div class="memo-panel-title" style="color:${group.color}">✈ ${group.shortName}</div>
        <button class="memo-panel-close" id="memo-close">✕</button>
      </div>
      <div style="font-size:11px;color:#8b949e;line-height:1.5;">
        FIRアノテーションがありません。<br>routes_ofp.js に fir: を追加すると表示されます。
      </div>`;
    panel.classList.remove('hidden');
    document.getElementById('memo-close').addEventListener('click', () => panel.classList.add('hidden'));
    return;
  }

  function buildFirItems(firIds) {
    return firIds.map(firId => {
      const feature = FIR_BOUNDARIES.features.find(f => f.properties.id === firId);
      const firLabel = feature ? feature.properties.label : firId;
      const firColor = feature ? feature.properties.color : group.color;
      const note = userNotes[firId] || '';
      return `<div class="memo-fir-item">
        <div class="memo-fir-name" style="color:${firColor}">${firLabel}</div>
        <textarea class="memo-fir-ta${note.trim() ? ' has-note' : ''}"
                  data-fir="${firId}" rows="3" placeholder="メモ…">${note}</textarea>
      </div>`;
    }).join('');
  }

  // 両方向ある場合はタブ、片方のみの場合はそのまま表示
  const bothDirs = hasOut && hasRet;
  const tabsHtml = bothDirs ? `
    <div class="memo-tabs">
      <button class="memo-tab active" data-dir="out">往路</button>
      <button class="memo-tab" data-dir="ret">復路</button>
    </div>` : '';

  const outHtml = hasOut ? `
    <div class="memo-tab-content active" id="memo-dir-out">
      ${buildFirItems(outFirs)}
    </div>` : '';

  const retHtml = hasRet ? `
    <div class="memo-tab-content${!hasOut ? ' active' : ''}" id="memo-dir-ret">
      ${buildFirItems(retFirs)}
    </div>` : '';

  panel.innerHTML = `
    <div class="memo-panel-header">
      <div class="memo-panel-title" style="color:${group.color}">✈ ${group.shortName}</div>
      <button class="memo-panel-close" id="memo-close">✕</button>
    </div>
    ${tabsHtml}
    ${outHtml}
    ${retHtml}
  `;
  panel.classList.remove('hidden');

  document.getElementById('memo-close').addEventListener('click', () => panel.classList.add('hidden'));

  // タブ切り替え
  panel.querySelectorAll('.memo-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      panel.querySelectorAll('.memo-tab').forEach(t => t.classList.remove('active'));
      panel.querySelectorAll('.memo-tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('memo-dir-' + tab.dataset.dir);
      if (target) target.classList.add('active');
    });
  });

  // 入力即保存（userNotes / localStorage と共有）
  panel.querySelectorAll('.memo-fir-ta').forEach(ta => {
    ta.addEventListener('input', () => {
      userNotes[ta.dataset.fir] = ta.value;
      localStorage.setItem('fir-user-notes', JSON.stringify(userNotes));
      ta.classList.toggle('has-note', ta.value.trim().length > 0);
      scheduleGistPush();
    });
  });
}

// ── Route FIR List Panel ──────────────────────
// ルートラインをタップ → 通過FIR一覧を表示
// 各FIRをタップ → openFirPanel() で詳細表示
function openRouteFirPanel(route) {
  // 通過FIRを経路順に収集（重複なし）
  const firIds = [];
  const seen = new Set();
  route.waypoints.forEach(w => {
    if (w.fir && !seen.has(w.fir)) {
      seen.add(w.fir);
      firIds.push(w.fir);
    }
  });
  if (firIds.length === 0) return;   // FIR情報なし → 何もしない

  const panel = document.getElementById('fir-panel');

  const listHtml = firIds.map(firId => {
    const rules = FIR_RULES[firId];
    const name  = rules ? rules.name : firId;
    const tags  = [];
    if (rules?.rnp2)        tags.push('<span class="tag tag-warn" style="font-size:9px;padding:1px 5px">RNP2</span>');
    if (rules?.rvsm)        tags.push('<span class="tag tag-ok"   style="font-size:9px;padding:1px 5px">RVSM</span>');
    if (rules?.hf_required) tags.push('<span class="tag tag-warn" style="font-size:9px;padding:1px 5px">HF</span>');
    const noInfo = !rules
      ? '<span style="color:#8b949e;font-size:11px">情報未登録</span>'
      : '';

    return `<div class="fir-list-item" data-fir="${firId}" data-label="${name.replace(/"/g, '&quot;')}">
      <div class="fir-list-row">
        <div>
          <div style="font-size:13px;font-weight:700;color:#f0f6fc">${name}</div>
          <div style="font-size:11px;color:#8b949e">${firId}</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px">
          ${tags.join('')}${noInfo}
          <span style="color:#8b949e;font-size:18px;line-height:1">›</span>
        </div>
      </div>
    </div>`;
  }).join('');

  panel.innerHTML = `
    <div class="panel-drag-handle"></div>
    <div class="panel-header">
      <div>
        <div class="panel-fir-name" style="font-size:14px">✈ ${route.label}</div>
        <div class="panel-country">${firIds.length} FIR通過 — タップで詳細</div>
      </div>
      <button id="panel-close">✕</button>
    </div>
    <div>${listHtml}</div>
  `;

  panel.classList.remove('hidden');

  document.getElementById('panel-close').addEventListener('click', () => {
    panel.classList.add('hidden');
  });

  panel.querySelectorAll('.fir-list-item').forEach(item => {
    item.addEventListener('click', () => {
      openFirPanel(item.dataset.fir, item.dataset.label);
    });
  });
}

// ── FIR Info Panel ────────────────────────────
function openFirPanel(firId, firLabel) {
  const rules = FIR_RULES[firId];
  const savedNote = userNotes[firId] || '';
  const firFeature = FIR_BOUNDARIES.features.find(f => f.properties.id === firId);
  const firColor = firFeature ? firFeature.properties.color : '#58a6ff';

  // Build My Note tab HTML (shared between both cases)
  const allNotesCount = Object.keys(userNotes).filter(k => userNotes[k]).length;
  const myNoteTabHtml = `
    <div class="tab-content" id="tab-mynote">
      <div style="font-size:12px;color:#8b949e;margin-bottom:10px;">
        ${firId} — ${firLabel || firId} 用メモ
      </div>
      <textarea id="user-note-area" placeholder="ここに自由にメモを追記できます...">${savedNote}</textarea>
      <button class="note-save-btn" id="note-save-btn">保存</button>
      <div class="note-save-toast hidden" id="note-save-toast"></div>

      <div class="note-io-section">
        <div class="note-io-title">📋 全メモ管理（${allNotesCount}件）</div>
        <div class="note-io-btns">
          <button class="note-io-btn" id="note-export-btn">📤 全メモをコピー</button>
          <button class="note-io-btn" id="note-import-toggle-btn">📥 インポート</button>
        </div>
        <div id="note-import-area" class="hidden">
          <textarea id="note-import-text" placeholder='Claudeから受け取ったJSONをここに貼り付け&#10;{"RJJJ":"メモ内容","YBBB":"..."}'></textarea>
          <button class="note-save-btn" id="note-import-btn" style="margin-top:6px;">読み込む</button>
        </div>
      </div>
    </div>
  `;

  const panel = document.getElementById('fir-panel');

  // FIRルールが未定義の場合でも基本パネルを表示
  if (!rules) {
    panel.innerHTML = `
      <div class="panel-drag-handle"></div>
      <div class="panel-header">
        <div>
          <div class="panel-fir-name" style="color:${firColor};">${firLabel}</div>
          <div class="panel-country">${firId}</div>
        </div>
        <button id="panel-close">✕</button>
      </div>
      <div class="panel-tabs">
        <button class="panel-tab active" data-tab="info">Info</button>
        <button class="panel-tab" data-tab="mynote">My Note${savedNote ? ' ●' : ''}</button>
      </div>
      <div class="tab-content active" id="tab-info">
        <div class="section">
          <div class="section-body" style="color:#8b949e;font-size:12px;">
            このFIRの詳細情報はまだ登録されていません。
          </div>
        </div>
      </div>
      ${myNoteTabHtml}
    `;
    panel.classList.remove('hidden');
    attachPanelListeners(firId);
    return;
  }

  // Tags
  const tags = [];
  if (rules.rnp2)        tags.push({ cls: 'tag-warn', text: 'RNP 2 Required' });
  if (rules.rvsm)        tags.push({ cls: 'tag-ok',   text: 'RVSM' });
  if (rules.hf_required) tags.push({ cls: 'tag-warn', text: 'HF Required' });
  if (rules.cpdlc !== 'Optional' && rules.cpdlc)
                          tags.push({ cls: 'tag-info',  text: `CPDLC: ${rules.cpdlc}` });

  const tagHtml = tags.map(t =>
    `<span class="tag ${t.cls}">${t.text}</span>`
  ).join('');

  // Special notes
  const notesHtml = rules.special_notes.length
    ? `<ul class="note-list">${rules.special_notes.map(n => `<li>${n}</li>`).join('')}</ul>`
    : '<span style="color:#8b949e;font-size:12px;">特記事項なし</span>';

  panel.innerHTML = `
    <div class="panel-drag-handle"></div>
    <div class="panel-header">
      <div>
        <div class="panel-fir-name" style="color:${firColor};">${rules.name}</div>
        <div class="panel-country">${rules.country} — ${firId}</div>
      </div>
      <button id="panel-close">✕</button>
    </div>

    <div class="panel-tabs">
      <button class="panel-tab active" data-tab="info">Info</button>
      <button class="panel-tab" data-tab="mynote">My Note${savedNote ? ' ●' : ''}</button>
    </div>

    <div class="tab-content active" id="tab-info">
      <div class="tag-row">${tagHtml}</div>

      <div class="section">
        <div class="section-title">🚨 Emergency Procedure</div>
        <div class="section-body warn">${rules.emergency_procedure}</div>
      </div>

      ${rules.contingency_procedure ? `
      <div class="section">
        <div class="section-title">🔄 Contingency Procedure</div>
        <div class="section-body warn">${rules.contingency_procedure}</div>
      </div>` : ''}

      ${rules.cpdlc_procedure ? `
      <div class="section">
        <div class="section-title">🖥️ CPDLC</div>
        <div class="section-body info">${rules.cpdlc_procedure}</div>
      </div>` : ''}

      ${rules.reg_rules ? `
      <div class="section">
        <div class="section-title">📋 Regional Rules (2-05)</div>
        <div class="section-body">${rules.reg_rules}</div>
      </div>` : ''}

      <div class="section">
        <div class="section-title">📡 Position Reporting</div>
        <div class="section-body">${rules.position_report}</div>
      </div>

      <div class="section">
        <div class="section-title">📻 Contacts</div>
        <div class="section-body info">
          <b>Main:</b> ${rules.contacts.main}<br>
          <b>Emergency:</b> ${rules.contacts.emergency}
        </div>
      </div>

      <div class="section">
        <div class="section-title">⚠️ Special Notes</div>
        <div class="section-body">${notesHtml}</div>
      </div>
    </div>

    ${myNoteTabHtml}
  `;

  panel.classList.remove('hidden');
  attachPanelListeners(firId);
}

// ── Panel shared event listeners ──────────────
function attachPanelListeners(firId) {
  const panel = document.getElementById('fir-panel');

  // Close
  document.getElementById('panel-close').addEventListener('click', () => {
    panel.classList.add('hidden');
  });

  // Tab switching
  panel.querySelectorAll('.panel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      panel.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
      panel.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('tab-' + tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // ── Save button ──
  const saveBtn  = document.getElementById('note-save-btn');
  const toast    = document.getElementById('note-save-toast');
  const textarea = document.getElementById('user-note-area');

  function showToast(msg, color = '#3fb950') {
    toast.textContent = msg;
    toast.style.color = color;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2000);
  }

  if (saveBtn && textarea) {
    saveBtn.addEventListener('click', () => {
      userNotes[firId] = textarea.value;
      localStorage.setItem('fir-user-notes', JSON.stringify(userNotes));
      scheduleGistPush();
      const noteTab = panel.querySelector('[data-tab="mynote"]');
      if (noteTab) noteTab.textContent = 'My Note' + (textarea.value ? ' ●' : '');
      saveBtn.classList.add('saved');
      showToast('✓ 保存しました');
      setTimeout(() => saveBtn.classList.remove('saved'), 1800);
    });
  }

  // ── Export: copy all notes as JSON ──
  const exportBtn = document.getElementById('note-export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const json = JSON.stringify(userNotes, null, 2);
      navigator.clipboard.writeText(json).then(() => {
        showToast('📋 全メモをコピーしました');
        exportBtn.textContent = '✓ コピー済み';
        setTimeout(() => exportBtn.textContent = '📤 全メモをコピー', 2000);
      }).catch(() => {
        // fallback: show in textarea
        const imp = document.getElementById('note-import-text');
        if (imp) { imp.value = json; imp.select(); }
        showToast('↓ テキストを選択してコピーしてください', '#e3b341');
      });
    });
  }

  // ── Import toggle ──
  const importToggle = document.getElementById('note-import-toggle-btn');
  const importArea   = document.getElementById('note-import-area');
  if (importToggle && importArea) {
    importToggle.addEventListener('click', () => {
      importArea.classList.toggle('hidden');
    });
  }

  // ── Import: load JSON into userNotes ──
  const importBtn  = document.getElementById('note-import-btn');
  const importText = document.getElementById('note-import-text');
  if (importBtn && importText) {
    importBtn.addEventListener('click', () => {
      try {
        const parsed = JSON.parse(importText.value.trim());
        if (typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error();
        Object.assign(userNotes, parsed);
        localStorage.setItem('fir-user-notes', JSON.stringify(userNotes));
        scheduleGistPush();
        // Refresh current FIR note textarea
        if (textarea) textarea.value = userNotes[firId] || '';
        const noteTab = panel.querySelector('[data-tab="mynote"]');
        if (noteTab) noteTab.textContent = 'My Note' + (userNotes[firId] ? ' ●' : '');
        importText.value = '';
        importArea.classList.add('hidden');
        showToast(`✓ ${Object.keys(parsed).length}件のメモを読み込みました`);
      } catch {
        showToast('⚠ JSONが正しくありません', '#f85149');
      }
    });
  }
}

// Close panels on map click
map.on('click', () => {
  document.getElementById('fir-panel').classList.add('hidden');
  document.getElementById('route-memo-panel').classList.add('hidden');
});

// ── GPS Current Position ──────────────────────
let gpsWatchId   = null;
let gpsMarker    = null;
let gpsFollowing = false;

const gpsBtn = document.getElementById('gps-btn');

const gpsDotIcon = L.divIcon({
  className: '',
  html: '<div class="gps-dot"></div>',
  iconAnchor: [0, 0],
});

function startGps() {
  if (!('geolocation' in navigator)) {
    alert('このブラウザはGeolocationに対応していません');
    return;
  }
  gpsFollowing = true;
  gpsBtn.classList.add('active');
  gpsBtn.textContent = '📍 追従中';

  gpsWatchId = navigator.geolocation.watchPosition(
    pos => {
      const latlng = [pos.coords.latitude, pos.coords.longitude];
      if (!gpsMarker) {
        gpsMarker = L.marker(latlng, { icon: gpsDotIcon, interactive: false, zIndexOffset: 1000 }).addTo(map);
      } else {
        gpsMarker.setLatLng(latlng);
      }
      if (gpsFollowing) {
        map.setView(latlng, map.getZoom());
      }
    },
    err => {
      console.warn('GPS error:', err.message);
      if (err.code === 1) alert('位置情報へのアクセスを許可してください');
    },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
  );

  // 手動パン時は追従を一時停止
  map.on('dragstart.gps', () => { gpsFollowing = false; gpsBtn.textContent = '📍'; });
}

function stopGps() {
  if (gpsWatchId !== null) {
    navigator.geolocation.clearWatch(gpsWatchId);
    gpsWatchId = null;
  }
  if (gpsMarker) {
    map.removeLayer(gpsMarker);
    gpsMarker = null;
  }
  gpsFollowing = false;
  map.off('dragstart.gps');
  gpsBtn.classList.remove('active');
  gpsBtn.textContent = '📍';
}

gpsBtn.addEventListener('click', () => {
  if (gpsWatchId !== null) {
    stopGps();
  } else {
    startGps();
  }
});

// ── Cloud Sync button ─────────────────────────
const cloudBtn = document.getElementById('cloud-btn');
cloudBtn.addEventListener('click', openCloudPanel);

// 起動時クラウド同期
initCloudSync();
