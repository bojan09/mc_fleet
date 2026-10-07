/* Maintenance Coordinator Academy — service worker
   - App shell precached so the academy works offline.
   - Page navigations: network-first (fresh HTML when online), cached copy offline.
   - Other same-origin files (CSS, JS, icons): stale-while-revalidate — served
     instantly from cache and refreshed in the background, so an update shows
     on the next visit.
   - Google Fonts: cache-first (fonts are immutable per URL).
   - Visual Library photos (Wikimedia): cache-first once viewed, for offline study.
   Bump VERSION on every deploy so old caches are cleared. */
const VERSION = 'mca-v4';
const APP_CACHE = `${VERSION}-app`;
const FONT_CACHE = `${VERSION}-fonts`;
const IMG_CACHE = `${VERSION}-img`;
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

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(APP_CACHE).then((c) => c.addAll(APP_SHELL.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
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
  } else if (/(^|\.)wikimedia\.org$/.test(url.hostname) && request.destination === 'image') {
    // Visual Library photos: keep the ones a student has viewed for offline study.
    event.respondWith(cacheFirst(request, IMG_CACHE));
  }
});
