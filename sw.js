const CACHE = 'avmap-v38';
const PRECACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data/routes.js',
  './data/routes_ofp.js',
  './data/fir-boundaries.js',
  './data/fir-rules.json',
  './data/airports_caug.js',
  './data/caug_notes_24.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Network-first for tile servers, cache-first for app files
  if (e.request.url.includes('carto') || e.request.url.includes('openstreetmap')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
