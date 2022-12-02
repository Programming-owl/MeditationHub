const VERSION = '4';

self.addEventListener('install', (event) => {
    console.log('[SW] Installing SW version:', VERSION);
});
self.addEventListener('fetch',() => console.log("fetch"));