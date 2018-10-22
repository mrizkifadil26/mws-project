let cacheName = 'MWSRizkiApp-v3';
let dataCacheName = 'MWSRizkiData-v3';
const filesToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/images/logo-1600_2x.png',
  '/images/logo-400.png',
  '/images/logo-600.png',
  '/images/logo.png',
  '/images/pics-1600_2x.jpg',
  '/images/pics-400.jpg',
  '/images/pics-600.jpg',
  '/images/pics.jpg',
  '/images/icons/icon-128x128.png',
  '/images/icons/icon-144x144.png',
  '/images/icons/icon-152x152.png',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-384x384.png',
  '/images/icons/icon-512x512.png',
  '/images/icons/icon-72x72.png',
  '/images/icons/icon-96x96.png',
  '/project1/add2numbers.html',
  '/project1/add2numbers.js',
  '/project2/mapbox.html',
  '/404.html'
];

var mwsDataUrl = 'https://mws-rizki.firebaseapp.com/';

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

/* self.addEventListener('fetch', function(e) {
  if (e.request.url.startsWith(mwsDataUrl)) {
    e.respondWith(
      fetch(e.request)
        .then(function(response) {
          return caches.open(dataCacheName).then(function(cache) {
            cache.put(e.request.url, response.clone());
            console.log('[ServiceWorker] Fetched & Cached', e.request.url);
            return response;
          });
        })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        console.log('[ServiceWorker] Fetch Only', e.request.url);
        return response || fetch(e.request);
      })
    );
  }
});
 */

self.addEventListener('fetch', function(event) {
  console.log('Fetching...');

  event.respondWith(
      caches.match(event.request).then((response) => {
          console.log(response);

          return response || fetch(event.request).then((response) => {
              return caches.open(dataCacheName).then((cache) => {
                  cache.put(event.request, response.clone());
                  return response;
              });
          })
      })
  );
});
