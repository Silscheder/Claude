const CACHE = "doom-v2";
const FILES = ["./", "index.html", "manifest.json", "js-dos.js", "js-dos.css",
  "doom-shareware.zip",
  "emulators/emulators.js", "emulators/wdosbox.js", "emulators/wdosbox.wasm",
  "emulators/wlibzip.js", "emulators/wlibzip.wasm"];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || e.request.url.startsWith("blob:")) return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request))
  );
});
