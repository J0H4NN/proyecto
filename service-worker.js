const CACHE_NAME = 'portafolio-cache-v5';
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './css/Ilus_Style.css',
  './js/Ilus_Script.js',
  './img/Blender.png',
  './img/ClipStudio.png',
  './img/CapCut.png',
  './img/filmora.png',
  './img/banner.png',
  './img/foto p.jpeg',
  './img/QR.png',
  './img/3D-1.png',
  './img/krizilla.png',
  './img/anima.png',
  './img/game.png',
  './img/icon.jpeg',
  './img/icon-192x192.png',
  './img/icon-512x512.png',
  './Modelado3D.html',
  './img/modelos 3D/1.png',
  './img/modelos 3D/2.png',
  './img/modelos 3D/3.png',
  './img/modelos 3D/4.png',
  './img/modelos 3D/5.png',
  './img/modelos 3D/6.png',
  './img/modelos 3D/7.png',
  './img/modelos 3D/8.png',
  './img/modelos 3D/9.png',
  './img/modelos 3D/10.png',
  './Ilustraciones.html',
  './img/ilustraciones/Charro negro.png',
  './img/ilustraciones/graduacion.png',
  './img/ilustraciones/dino.jpg',
  './img/ilustraciones/jigsaw.jpg',
  './img/ilustraciones/lumity.jpg',
  './img/ilustraciones/Dia 3.jpg',
  './img/ilustraciones/dia 5.png',
  './img/ilustraciones/shen.png',
  './img/ilustraciones/Invincible.png',
  './img/ilustraciones/Dia 1.jpg',
  './img/ilustraciones/d1.jpg',
  './img/ilustraciones/d2.jpg',
  './img/ilustraciones/Avatar ideas.png',
  './img/ilustraciones/banners/1.png',
  './img/ilustraciones/banners/10.png',
  './img/ilustraciones/banners/8.png',
  './img/ilustraciones/banners/3.png',
  './produccion.html',
  './img/animaciones/alma de felpa final.mp4',
  './img/animaciones/Copia de presentacion.mp4',
  './img/animaciones/Ecos del Ayer.mp4',
  './img/animaciones/Examebn.mp4',
  './img/animaciones/Ultima_Parada,_Fin_del_mundo.mp4',
  './videojuegos.html',
  './img/videojuegos/machete1.png',
  './img/videojuegos/machete gameplay.mp4',
  './img/videojuegos/Julian.png',
  './img/videojuegos/enemigo.png',
];

// Evento de instalación
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos cacheados correctamente');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error('Error al cachear archivos durante instalación:', err))
  );
});

// Evento de activación
self.addEventListener('activate', event => {
  console.log('Service Worker: Activando...');
  const cacheWhitelist = [CACHE_NAME]; // Lista blanca de caches permitidas

  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!cacheWhitelist.includes(cacheName)) {
              console.log(`Eliminando cache antiguo: ${cacheName}`);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim()) // Activa el SW en todas las pestañas
  );
});

// Evento de fetch (recuperación)
self.addEventListener('fetch', event => {
  console.log('Service Worker: Recuperando:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // Devuelve el archivo desde el cache
          console.log('Recuperado del cache:', event.request.url);
          return response;
        }
        // Si no está en cache, lo recupera de la red
        console.log('Recuperado de la red:', event.request.url);
        return fetch(event.request);
      })
      .catch(err => console.error('Error en fetch:', err))
  );
});
