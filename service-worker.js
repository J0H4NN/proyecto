const CACHE_NAME = 'portafolio-cache-v7';
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './css/Ilus_Style.css',
  './js/Ilus_Script.js',
  './script.js',
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

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request) // Busca el recurso en el cache
      .then(cachedResponse => {
        if (cachedResponse) {
          // Si el recurso está en el cache, se devuelve
          return cachedResponse;
        }
        // Si no está en el cache, intenta recuperarlo de la red
        return fetch(event.request)
          .catch(err => {
            console.error('Error al recuperar el recurso de la red:', err);
            // Devuelve un fallback (opcional) o una respuesta vacía
            return new Response('Contenido no disponible offline', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
      .catch(err => {
        console.error('Error al buscar el recurso:', err);
        // Si `caches.match` falla, devuelve un error
        return new Response('Error interno del Service Worker', {
          status: 500,
          statusText: 'Internal Server Error',
          headers: { 'Content-Type': 'text/plain' }
        });
      })
  );
});
