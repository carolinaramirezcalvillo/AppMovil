const STATIC_CACHE = "static";
//se declara un vector con la ubicacion y el nombre de los archivos que forman parte del proyecto necesarios para su ejecución
const APP_SHELL =[
    "/",
    "/index.html",
    "/styles/style.css",
    "/js/functions.js",
    "/js/main.js",
    "/js/script1.js",
    "/js/script2.js",
    "/images/iconos/512.png",
    "/js/notificaciones.js",
    "/images/pwalogo.png",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
];
    //agregar los links de bootstrap de css y js
    
    //En el evento install se agregan los archivos a la cache, se ejecuta cuando se abre la app automatico
self.addEventListener("install", (e) => {
    console.log("entrando a instalar");
    const cacheStatic = caches
       .open(STATIC_CACHE)
       .then((cache) => cache.addAll(APP_SHELL));
    
    e.waitUntil(cacheStatic);
}); 
// en el evento fetch se envian los archivos a la pagina web o paginas, se ejecutan cuando lo solicta la pagina
self.addEventListener("fetch", (e) => {
    console.log("fectch! ", e.request);

    e.respondWith(
        caches
           .match(e.request)
           .then(res => res || fetch(e.request))
           .catch(console.log)
           );
});

