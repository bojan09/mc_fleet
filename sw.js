/* Maintenance Coordinator Academy — service worker
   - App shell precached so the academy works offline.
   - Page navigations: network-first (fresh HTML when online), cached copy offline.
   - Other same-origin files (CSS, JS, icons): stale-while-revalidate — served
     instantly from cache and refreshed in the background, so an update shows
     on the next visit.
   - Google Fonts: cache-first (fonts are immutable per URL).
   - Visual Library thumbnails: precached; full photos cached once viewed (stale-while-revalidate).
   Bump VERSION on every deploy so old caches are cleared. */
const VERSION = 'mca-v5';
const APP_CACHE = `${VERSION}-app`;
const FONT_CACHE = `${VERSION}-fonts`;
const APP_SHELL = [
  './',
  'index.html',
  'styles.css',
  'script.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png'
];

// Visual Library thumbnails are precached so browsing works offline from the first visit;
// full-size photos are cached the first time a student opens an item.
const LIB_THUMBS = [
  'img/library/airdisc-sm.webp',
  'img/library/airdryer-sm.webp',
  'img/library/airspring-sm.webp',
  'img/library/airtanks-sm.webp',
  'img/library/alternator-sm.webp',
  'img/library/apu-sm.webp',
  'img/library/battery-sm.webp',
  'img/library/belt-sm.webp',
  'img/library/chamber-sm.webp',
  'img/library/chassis-sm.webp',
  'img/library/clutch-sm.webp',
  'img/library/compressor-sm.webp',
  'img/library/container-sm.webp',
  'img/library/daycab-sm.webp',
  'img/library/def-sm.webp',
  'img/library/differential-sm.webp',
  'img/library/dock-sm.webp',
  'img/library/dolly-sm.webp',
  'img/library/doubles-sm.webp',
  'img/library/dpf-sm.webp',
  'img/library/driveshaft-sm.webp',
  'img/library/dryvan-sm.webp',
  'img/library/ecm-sm.webp',
  'img/library/eld-sm.webp',
  'img/library/engine-sm.webp',
  'img/library/fifthwheel-sm.webp',
  'img/library/flatbed-sm.webp',
  'img/library/gladhands-sm.webp',
  'img/library/injector-sm.webp',
  'img/library/leafspring-sm.webp',
  'img/library/liftgate-sm.webp',
  'img/library/radiator-sm.webp',
  'img/library/reefer-sm.webp',
  'img/library/reeferunit-sm.webp',
  'img/library/rgn-sm.webp',
  'img/library/sleeper-sm.webp',
  'img/library/starter-sm.webp',
  'img/library/steering-sm.webp',
  'img/library/straight-sm.webp',
  'img/library/tandem-sm.webp',
  'img/library/tanker-sm.webp',
  'img/library/tire-sm.webp',
  'img/library/tow-sm.webp',
  'img/library/tractor-sm.webp',
  'img/library/transmission-sm.webp',
  'img/library/triangle-sm.webp',
  'img/library/turbo-sm.webp',
  'img/library/wheel-sm.webp',
  'img/library/yard-sm.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(APP_CACHE).then((c) => c.addAll([...APP_SHELL, ...LIB_THUMBS].map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(APP_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    return cache.match('index.html');
  }
}

async function staleWhileRevalidate(event) {
  const cache = await caches.open(APP_CACHE);
  const cached = await cache.match(event.request, { ignoreSearch: true });
  // no-cache: revalidate with the server instead of reusing a stale HTTP-cache copy
  const refresh = fetch(event.request.url, { cache: 'no-cache' })
    .then((response) => { if (response.ok) cache.put(event.request, response.clone()); return response; })
    .catch(() => cached);
  if (cached) { event.waitUntil(refresh); return cached; }
  return refresh;
}

async function cacheFirst(request, name = FONT_CACHE) {
  const cache = await caches.open(name);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok || response.type === 'opaque') cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin === self.location.origin) {
    if (request.mode === 'navigate') event.respondWith(networkFirst(request));
    else event.respondWith(staleWhileRevalidate(event));
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(request));
  }
});
