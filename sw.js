self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/index.css", "./images/logo192.png"]);
        })
    );
});

self.addEventListener("fetch", function(e) {
    e.respondWith(
        caches.match(e.request).then(response => {
    return response || fetch(e.request);
        })
    );
});
