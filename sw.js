// Rebound 30 — Offline Service Worker
const CACHE_NAME = 'rebound30-v4';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/css/fonts.css',
  '/css/styles.css',
  '/js/icons.js',
  '/js/helpers.js',
  '/js/store.js',
  '/js/engine.js',
  '/js/stories.js',
  '/js/app.js',
  '/fonts/plus-jakarta-sans-1.woff2',
  '/fonts/plus-jakarta-sans-10.woff2',
  '/fonts/plus-jakarta-sans-11.woff2',
  '/fonts/plus-jakarta-sans-12.woff2',
  '/fonts/plus-jakarta-sans-13.woff2',
  '/fonts/plus-jakarta-sans-14.woff2',
  '/fonts/plus-jakarta-sans-15.woff2',
  '/fonts/plus-jakarta-sans-16.woff2',
  '/fonts/plus-jakarta-sans-17.woff2',
  '/fonts/plus-jakarta-sans-18.woff2',
  '/fonts/plus-jakarta-sans-19.woff2',
  '/fonts/plus-jakarta-sans-2.woff2',
  '/fonts/plus-jakarta-sans-20.woff2',
  '/fonts/plus-jakarta-sans-3.woff2',
  '/fonts/plus-jakarta-sans-4.woff2',
  '/fonts/plus-jakarta-sans-5.woff2',
  '/fonts/plus-jakarta-sans-6.woff2',
  '/fonts/plus-jakarta-sans-7.woff2',
  '/fonts/plus-jakarta-sans-8.woff2',
  '/fonts/plus-jakarta-sans-9.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Only handle HTTP and HTTPS requests; ignore chrome-extension://, moz-extension://, file://, etc.
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return;
  }

  // Only cache GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Double check scheme before storing in cache
          if (url.startsWith('http://') || url.startsWith('https://')) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache).catch(() => {
                // Ignore any cache put errors safely
              });
            });
          }

          return networkResponse;
        })
        .catch(() => {
          // Offline navigation fallback
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
    })
  );
});
