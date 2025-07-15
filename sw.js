const CACHE_NAME = 'wallet-explorer-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://upload.wikimedia.org/wikipedia/commons/3/3e/Facebook_icon_192.png',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Blisk-logo-512-512-background-transparent.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
