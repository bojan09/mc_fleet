/* Maintenance Coordinator Academy — service worker
   - App shell precached so the academy works offline.
   - Page navigations: network-first (fresh HTML when online), cached copy offline.
   - script.js, styles.css and content/<track>.json (lesson text) are
     requested with a content hash (?v=…) stamped by tools/build.mjs, so they
     are cache-first: a given URL never changes, and new HTML always loads
     the code and lessons it was built with. All are precached, so every
     lesson works offline once the service worker is installed.
   - Other same-origin files (icons, images): stale-while-revalidate — served
     instantly from cache and refreshed in the background.
   - Visual Library thumbnails: precached; full photos cached once viewed (stale-while-revalidate).
   VERSION is stamped by tools/build.mjs; a new release gets a new cache and
   the old one is cleared on activate. */
const VERSION = 'mca-ffba05f9aa';
const APP_CACHE = `${VERSION}-app`;
const APP_SHELL = [
  './',
  'index.html',
  'styles.css?v=ee8c2e7cc2',
  'script.js?v=8026f7d253',
  'manifest.webmanifest',
  // Lesson text per track (tools/build.mjs fills this list).
  // content:start
  'content/beginner.json?v=faa675b05f',
  'content/advanced.json?v=d4a5a81c77',
  'content/expert.json?v=75721eb090',
  'content/operations.json?v=f4d59c8a6e',
  // content:end
  'fonts/plex-sans-latin.woff2',
  'fonts/plex-mono-400-latin.woff2',
  'fonts/plex-mono-500-latin.woff2',
  'fonts/plex-mono-600-latin.woff2',
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

async function cacheFirst(request) {
  const cache = await caches.open(APP_CACHE);
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
    else if (url.searchParams.has('v')) event.respondWith(cacheFirst(request));
    else event.respondWith(staleWhileRevalidate(event));
  }
});
