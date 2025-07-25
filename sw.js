self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
