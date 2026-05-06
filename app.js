// ──────────────────────────────────────────────
//  Aviation Route Map — app.js
// ──────────────────────────────────────────────

// Load FIR rules from JSON (injected at build or fetched)
let FIR_RULES = {};
fetch('data/fir-rules.json')
  .then(r => r.json())
  .then(d => { FIR_RULES = d; });

// Map init
const map = L.map('map', {
  center: [27, 120],
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
// FIRs with detailed rules get distinct colors; others use region defaults
const FIR_COLORS = {
  'RJJJ':   '#264f78',
  'RJJJ-F': '#264f78',
  'ZSHA':   '#7c2020',
  'ZGZU':   '#7c2020',
  'ZJSA':   '#7c2020',
  'VHHK':   '#1a472a',
  'RCAA':   '#1a3a5c',
  'RPHI':   '#3a2a6a',
  'VVHM':   '#5a4a00',
  'VTBB':   '#2a4a2a',
};

// Region-based fallback colors
const REGION_COLORS = {
  'APAC':   '#1a2a3a',
  'EMEA':   '#2a1a3a',
  'AMAS':   '#1a3a2a',
  'VATSSA': '#3a2a1a',
};

FIR_BOUNDARIES.features.forEach(feature => {
  const id = feature.properties.id;
  const region = feature.properties.region || '';
  const color = FIR_COLORS[id] || REGION_COLORS[region] || '#1e2530';

  // Convert GeoJSON [lng,lat] to Leaflet [lat,lng]
  const coords = feature.geometry.coordinates[0].map(([lng, lat]) => [lat, lng]);

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
function ofpPolyline(routeId, color, dashed) {
  const route = OFP_ROUTES[routeId];
  if (!route) return null;
  const coords = route.waypoints.map(w => w.coords);
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
  return line;
}

// Add HND→MNL OFP line to existing MNL layer
const hndMnlLine = ofpPolyline('HND-MNL', '#C9B8FF', false);
if (hndMnlLine) hndMnlLine.addTo(routeLayers['japan-mnl']);

const OFP_GROUPS = [
  { id: 'ofp-can', shortName: 'CAN', color: '#FFB8C9',
    routeIds: ['HND-CAN', 'CAN-HND'], airports: ['HND', 'CAN'] },
  { id: 'ofp-del', shortName: 'DEL', color: '#FFE5B8',
    routeIds: ['HND-DEL', 'DEL-HND'], airports: ['HND', 'DEL'] },
];

OFP_GROUPS.forEach(group => {
  const layer = L.layerGroup();
  group.routeIds.forEach((rid, i) => {
    const line = ofpPolyline(rid, group.color, i === 1);
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

// OFP route toggle buttons (CAN, DEL)
OFP_GROUPS.forEach(group => {
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
