// Nama cache dengan versi untuk memungkinkan cache yang lebih baru
var CACHE_NAME = 'kelompok-cache-v2';
var urlsToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/app.js',
    '/manifest.json',
    '/images/instagram-icon.png', // Tambahkan resource lain jika ada
    '/images/youtube-icon.png',
    '/images/image-header.png',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png'
];

// Install event - caching file statis
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Membuka cache:', CACHE_NAME);
            return cache.addAll(urlsToCache);
        })
        .catch(function(error) {
            console.error('Cache gagal dibuka: ', error);
        })
    );
});

// Active event - menghapus cache lama
self.addEventListener('active', function(event) {
    var cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Menghapus cache lama:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch evebt - mencoba mengambil dari cache terlebih dahulu, jika gagal ambil dari jaringan 
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Jika ditemukan di cache, kembalikan, jika tidak diambil dari jaringan
            return response || fetch(event.request);
        })
        .catch(function(error) {
            console.error('Fetch gagal: ', error);
        })
    );
});