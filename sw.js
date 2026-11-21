// Bump VERSION whenever you change any file, so users get the update.
const VERSION="aml-monitor-v2";
const PDF_LIB="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
const FILES=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil((async()=>{const c=await caches.open(VERSION);await c.addAll(FILES);try{const r=await fetch(PDF_LIB,{mode:"no-cors"});await c.put(PDF_LIB,r)}catch(x){}self.skipWaiting()})())});
self.addEventListener("activate",e=>{e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==VERSION)await caches.delete(k);await self.clients.claim()})())});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);if(u.origin!==location.origin&&r.url!==PDF_LIB)return;
e.respondWith((async()=>{const c=await caches.open(VERSION),hit=await c.match(r,{ignoreSearch:true});const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==="opaque"))c.put(r,res.clone());return res}).catch(()=>null);return hit||(await net)||(r.mode==="navigate"?await c.match("./index.html"):Response.error())})())});
