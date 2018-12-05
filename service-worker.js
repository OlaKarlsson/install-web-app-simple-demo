self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('demo-store').then(function(cache) {
        return cache.addAll([
          '/index.html',
          '/js/main.js',
          '/css/main.css',
          '/img/demo.png'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });