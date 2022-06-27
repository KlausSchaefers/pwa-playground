var cacheName = 'pwa-3';
var filesToCache = [
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install > ' + cacheName);
  self.skipWaiting();
  console.log('[ServiceWorker] Cache > ' + filesToCache);
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  console.debug('[ServiceWorker] Fetch')
  fetch(event.request);
});