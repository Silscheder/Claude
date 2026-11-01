const CACHE = "doom-v1";
const FILES = ["index.html", "manifest.json", "js-dos.js", "js-dos.css",
  "emulators/emulators.js", "emulators/wdosbox.js", "emulators/wdosbox.wasm",
  "emulators/wlibzip.js", "emulators/wlibzip.wasm"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("fetch", e => {
  if (e.request.url.startsWith("blob:")) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
