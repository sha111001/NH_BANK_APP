const CACHE = 'nh-prototype-shell-v1';
const ASSETS = ['./', './index.html', './config.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (new URL(e.request.url).origin !== self.location.origin) return; // Figma still requires network
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
