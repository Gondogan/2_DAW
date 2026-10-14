// Importamos el paquete 'cors' que hemos visto en clase.
// Es un middleware que añade cabeceras de seguridad para permitir que 
// otras páginas web (con distinto dominio/puerto) puedan hacer peticiones a nuestro servidor.
const cors = require('cors');

// Importamos 'express', un framework que nos facilita la creación de servidores web en Node.js.
const express = require('express');

// Inicializamos la aplicación de express y la guardamos en la variable 'app'.
// Esto crea el objeto de nuestro servidor web que vamos a ir configurando.
const app = express();

// Definimos en qué puerto va a escuchar nuestro servidor las peticiones entrantes.
let PORT = 8080;

// Constante para una futura configuración de carpetas estáticas (archivos públicos).
const PUBLICA = 'publica';

// USO DEL MIDDLEWARE: 
// Al usar app.use(cors()), le indicamos a Express que TODAS las peticiones entrantes
// deben pasar primero por la función de cors. Esta función intercepta la petición,
// da los permisos necesarios y luego deja que la petición continúe su camino.
app.use(cors());

// Definimos una ruta de tipo GET. Cuando el cliente acceda a la URL '/peliculas/123' (o cualquier ID),
// se ejecutará esta función. 
// - req (request): Contiene la información de la petición que hace el cliente.
// - res (response): Se utiliza para enviar la respuesta del servidor.
// - next: Sirve para pasar al siguiente middleware si lo hubiera.
app.get('/peliculas/:peliculasId', function(req, res, next) {
  // El método res.send() envía este texto de vuelta al navegador del usuario.
  res.send('Hola Lector');
});

// El método app.listen() enciende el servidor y lo deja esperando peticiones en el puerto indicado.
// Cuando arranca correctamente, ejecuta la función interna.
app.listen(PORT, function() {
  // El método console.log() imprime este mensaje en nuestra terminal para avisarnos de que todo va bien.
  console.log('Lector escuchando en el puerto 8080...');
});