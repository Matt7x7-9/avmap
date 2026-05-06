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
  const coords = rawCoords.map(([lng, lat]) => [
    lat,
    shiftEast && lng < 0 ? lng + 360 : lng,
  ]);

  const polygon = L.polygon(coords, {
    color: color,
    fillColor: color,
    fillOpacity: 0.3,
    weight: 1.5,
    dashArray: '4 3',
  });

  polygon.on('click', () => openFirPanel(id, feature.properties.label));

  // FIR label — interactive so tapping the label also opens the panel
  const center = polygon.getBounds().getCenter();
  const label = L.divIcon({
    className: '',
    html: `<div style="color:#8b949e;font-size:10px;font-weight:700;
                       letter-spacing:0.5px;white-space:nowrap;
                       text-shadow:0 0 4px #000,0 0 4px #000;
                       cursor:pointer;padding:6px;">
             ℹ ${feature.properties.label}
           </div>`,
    iconAnchor: [0, 0],
  });
  const labelMarker = L.marker(center, { icon: label, interactive: true });
  labelMarker.on('click', () => openFirPanel(id, feature.properties.label));
  labelMarker.addTo(firLayer);

  polygon.addTo(firLayer);
});

firLayer.addTo(map);

// ── Airport markers ───────────────────────────
function airportIcon(icao) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:10px;height:10px;border-radius:50%;
      background:#f0f6fc;border:2px solid #0d1117;
      box-shadow:0 0 6px rgba(255,255,255,0.4);
    "></div>`,
    iconSize: [10, 10],
    iconAnchor: [5, 5],
  });
}

const airportMarkers = {};
Object.entries(AIRPORTS).forEach(([code, ap]) => {
  const marker = L.marker(ap.coords, { icon: airportIcon(ap.icao) });
  marker.bindPopup(`
    <div class="popup-airport-name">${code} — ${ap.icao}</div>
    <div class="popup-icao">${ap.name}</div>
  `, { maxWidth: 200 });
  airportMarkers[code] = marker;
});

// ── Route lines ───────────────────────────────
function buildRouteLayer(group) {
  const layer = L.layerGroup();

  Object.entries(group.routes).forEach(([routeKey, coords]) => {
    // Forward route
    const line = L.polyline(coords, {
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
      const returnLine = L.polyline([...coords].reverse(), {
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

  // Airport markers for this group
  group.airports.forEach(code => {
    if (airportMarkers[code]) airportMarkers[code].addTo(layer);
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

// "FIRWPT" / "FIR WPT" 等のプレースホルダ名を、同ルート内5nm以内の実在WPT名で置換
// OFPでは "FIR WPT"（スペースあり）と書かれることもある
const FIR_WPT_PLACEHOLDER = /^FIR[\s_]?WPT\d*$/i;

function resolveFirWptName(wpts, idx) {
  const w = wpts[idx];
  if (!FIR_WPT_PLACEHOLDER.test(w.name)) return w.name;  // 通常WPTはそのまま
  const [lat0, lng0] = w.coords;
  let best = null, bestDist = 5.0;                        // 5nm上限
  wpts.forEach((other, j) => {
    if (j === idx) return;
    if (FIR_WPT_PLACEHOLDER.test(other.name)) return;     // 他のプレースホルダはスキップ
    const [lat1, lng1] = other.coords;
    const d = distNm(lat0, lng0, lat1, lng1);
    if (d < bestDist) { bestDist = d; best = other.name; }
  });
  return best || w.name;                                  // 見つかれば置換、なければ元の名前
}

// Returns a LayerGroup containing the polyline + FIR-boundary diamond markers.
// Western Hemisphere longitudes (< -30°) are auto-shifted +360° so Pacific
// routes appear east of Japan rather than west.
function ofpPolyline(routeId, color, dashed) {
  const route = OFP_ROUTES[routeId];
  if (!route) return null;

  const group = L.layerGroup();

  // Shift Western Hemisphere coords to eastern map copy
  const waypoints = route.waypoints.map(w => {
    const [lat, lng] = w.coords;
    return { ...w, coords: [lat, lng < -30 ? lng + 360 : lng] };
  });

  const coords = waypoints.map(w => w.coords);
  const line = L.polyline(coords, {
    color,
    weight: dashed ? 2 : 2.5,
    opacity: dashed ? 0.6 : 0.85,
    dashArray: dashed ? '6 4' : null,
    smoothFactor: 1,
  });
  line.bindPopup(
    `<b style="color:${color}">${route.label}</b><br>` +
    `<span style="font-size:11px;color:#8b949e">${route.ofpSource}</span>`
  );
  line.addTo(group);

  // FIR boundary crossing markers — diamond + WPT name label
  waypoints.forEach((w, i) => {
    if (!w.fir) return;
    const displayName = resolveFirWptName(waypoints, i);  // FIRWPT→近傍WPT名に置換
    const firMarker = L.marker(w.coords, {
      icon: L.divIcon({
        className: '',
        html: `<div class="fir-wpt-label">
                 <div class="fir-diamond"></div>
                 <span class="fir-wpt-name">${displayName}</span>
               </div>`,
        iconSize: [80, 14],
        iconAnchor: [5, 7],
      }),
      interactive: true,
      zIndexOffset: 100,
    });
    firMarker.bindTooltip(
      `<span class="fir-tip-fir">${w.fir}</span> FIR`,
      { className: 'fir-tip', direction: 'top', offset: [0, -8] }
    );
    firMarker.addTo(group);
  });

  return group;
}

const OFP_GROUPS = [
  // ── Northeast Asia ──────────────────────────────────────────────
  { id: 'ofp-gmp',  shortName: 'GMP', color: '#4A90D9',
    routeIds: ['RKSS-RJTT', 'RJTT-RKSS'],
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
  // ── Southeast Asia ──────────────────────────────────────────────
  { id: 'ofp-hkg',  shortName: 'HKG', color: '#C0392B',
    routeIds: ['VHHH-RJAA', 'RJAA-VHHH', 'VHHH-RJTT', 'RJTT-VHHH'],
    airports: ['NRT', 'HND', 'HKG'] },
  { id: 'ofp-bkk',  shortName: 'BKK', color: '#F1C40F',
    routeIds: ['VTBS-RJTT', 'RJTT-VTBS', 'VTBS-RJAA', 'RJAA-VTBS', 'VTBS-RJBB', 'RJBB-VTBS'],
    airports: ['HND', 'NRT', 'KIX', 'BKK'] },
  { id: 'ofp-sgn',  shortName: 'SGN', color: '#16A085',
    routeIds: ['RJTT-VVTS', 'VVTS-RJTT', 'RJAA-VVTS', 'VVTS-RJAA'],
    airports: ['HND', 'NRT', 'SGN'] },
  { id: 'ofp-sin',  shortName: 'SIN', color: '#E74C3C',
    routeIds: ['WSSS-RJAA', 'RJAA-WSSS', 'WSSS-RJTT', 'RJTT-WSSS'],
    airports: ['NRT', 'HND', 'SIN'] },
  { id: 'ofp-cgk',  shortName: 'CGK', color: '#27AE60',
    routeIds: ['WIII-RJAA', 'RJAA-WIII'],
    airports: ['NRT', 'CGK'] },
  { id: 'ofp-kul',  shortName: 'KUL', color: '#1ABC9C',
    routeIds: ['WMKK-RJAA', 'RJAA-WMKK'],
    airports: ['NRT', 'KUL'] },
  // ── Pacific (日付変更線越え — 初期オフ) ─────────────────────────
  { id: 'ofp-yvr',  shortName: 'YVR', color: '#5DADE2',
    routeIds: ['CYVR-RJAA', 'RJAA-CYVR'],
    airports: ['NRT', 'YVR'], defaultOff: true },
  { id: 'ofp-hnl',  shortName: 'HNL', color: '#A569BD',
    routeIds: ['PHNL-RJBB', 'RJAA-PHNL'],
    airports: ['KIX', 'NRT', 'HNL'], defaultOff: true },
];

OFP_GROUPS.forEach(group => {
  const layer = L.layerGroup();
  group.routeIds.forEach((rid, i) => {
    const line = ofpPolyline(rid, group.color, i % 2 === 1);  // odd = dashed (return)
    if (line) line.addTo(layer);
  });
  group.airports.forEach(code => {
    if (airportMarkers[code]) airportMarkers[code].addTo(layer);
  });
  routeLayers[group.id] = layer;
});

// ── Route toggle buttons ──────────────────────
const toggleContainer = document.getElementById('route-toggles');

ROUTE_GROUPS.forEach(group => {
  const btn = document.createElement('button');
  btn.className = 'route-btn active';
  btn.textContent = group.shortName;
  btn.style.borderColor = group.color;
  btn.style.backgroundColor = group.color;
  btn.style.color = '#0d1117';

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
  activeRoutes.add(group.id);
  routeLayers[group.id].addTo(map);
});

// OFP route toggle buttons
OFP_GROUPS.forEach(group => {
  const isOn = !group.defaultOff;
  const btn = document.createElement('button');
  btn.className = isOn ? 'route-btn active' : 'route-btn';
  btn.textContent = group.shortName;
  btn.style.borderColor = group.color;
  btn.style.backgroundColor = isOn ? group.color : 'transparent';
  btn.style.color = isOn ? '#0d1117' : '#c9d1d9';

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
  if (isOn) {
    activeRoutes.add(group.id);
    routeLayers[group.id].addTo(map);
  }
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

// ── FIR Info Panel ────────────────────────────
function openFirPanel(firId, firLabel) {
  const rules = FIR_RULES[firId];

  // FIRルールが未定義の場合でも基本パネルを表示
  if (!rules) {
    const panel = document.getElementById('fir-panel');
    panel.innerHTML = `
      <div class="panel-drag-handle"></div>
      <div class="panel-header">
        <div>
          <div class="panel-fir-name">${firLabel}</div>
          <div class="panel-country">${firId}</div>
        </div>
        <button id="panel-close">✕</button>
      </div>
      <div class="section">
        <div class="section-body" style="color:#8b949e;font-size:12px;">
          このFIRの詳細情報はまだ登録されていません。
        </div>
      </div>
    `;
    panel.classList.remove('hidden');
    document.getElementById('panel-close').addEventListener('click', () => {
      panel.classList.add('hidden');
    });
    return;
  }

  const panel = document.getElementById('fir-panel');

  // Tags
  const tags = [];
  if (rules.rnp2)       tags.push({ cls: 'tag-warn', text: 'RNP 2 Required' });
  if (rules.rvsm)       tags.push({ cls: 'tag-ok',   text: 'RVSM' });
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

  // User notes
  const savedNote = userNotes[firId] || '';

  panel.innerHTML = `
    <div class="panel-drag-handle"></div>
    <div class="panel-header">
      <div>
        <div class="panel-fir-name">${rules.name}</div>
        <div class="panel-country">${rules.country} — ${firId}</div>
      </div>
      <button id="panel-close">✕</button>
    </div>

    <div class="tag-row">${tagHtml}</div>

    <div class="section">
      <div class="section-title">🚨 Emergency Procedure</div>
      <div class="section-body warn">${rules.emergency_procedure}</div>
    </div>

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

    <div class="section">
      <div class="section-title">📝 自分用メモ</div>
      <textarea id="user-note-area" placeholder="ここに自由にメモを追記できます...">${savedNote}</textarea>
    </div>
  `;

  panel.classList.remove('hidden');

  document.getElementById('panel-close').addEventListener('click', () => {
    panel.classList.add('hidden');
  });

  document.getElementById('user-note-area').addEventListener('input', (e) => {
    userNotes[firId] = e.target.value;
    localStorage.setItem('fir-user-notes', JSON.stringify(userNotes));
  });
}

// Close panel on map click
map.on('click', () => {
  document.getElementById('fir-panel').classList.add('hidden');
});
