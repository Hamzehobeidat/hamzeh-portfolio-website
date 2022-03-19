const CACHE_NAME = 'version-1';
const urlsToCache = [
  '/',
  './index.html',
  './images/av1.png',
  './images/av2.png',
  './images/av3.png',
  './images/av4.png',
  './images/bg-texture.png',
  './images/course_track.png',
  './images/Exams.png',
  './images/hamzeh-about.jpg',
  './images/hamzeh.png',
  './images/hamzeh_obeidat.pdf',
  './images/hr_system.jpg',
  './images/icon-192x192.png',
  './images/icon-256x256.png',
  './images/icon-384x384.png',
  './images/icon-512x512.png',
  './images/me-about.jpg',
  './images/logo.jpg',
  './images/me.png',
  './images/portfolio.png',
  './images/sawa.png',
  './manifest.json',
  '/static/js/bundle.js',
  'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:wght@300;400;500;700&display=swap',
];

const self = this;
//Install sw
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');

      return cache.addAll(urlsToCache);
    }),
  );
});

//listen for requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    }),
  );
});
//activate the sw

self.addEventListener('activate', event => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then(cacheName =>
      Promise.all(
        cacheName.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});
