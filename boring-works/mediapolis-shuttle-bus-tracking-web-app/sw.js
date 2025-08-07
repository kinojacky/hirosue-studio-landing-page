const CACHE_NAME = 'shuttle-bus-cache-v1';
const urlsToCache = [
  '/boring-works/mediapolis-shuttle-bus-tracking-web-app/',
  '/boring-works/mediapolis-shuttle-bus-tracking-web-app/index.html',
  '/boring-works/mediapolis-shuttle-bus-tracking-web-app/css/styles.css',
  '/boring-works/mediapolis-shuttle-bus-tracking-web-app/js/routes.js',
  '/boring-works/mediapolis-shuttle-bus-tracking-web-app/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
