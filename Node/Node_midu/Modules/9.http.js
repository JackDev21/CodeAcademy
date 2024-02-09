// Importamos el módulo http de Node.js
const http = require('node:http')
// Importamos la función findAvailablePort desde un módulo local llamado '10.free-port'
const { findAvailablePort } = require('./10.free-port')

// Creamos un servidor HTTP utilizando el método createServer()
// El callback se ejecuta cada vez que se recibe una solicitud (request) al servidor
const server = http.createServer((req, res) => {
  // Este mensaje se imprimirá en la consola cada vez que se reciba una solicitud
  console.log('request received')

  // Enviamos una respuesta (response) al cliente con el mensaje "Hola mundo"
  res.end('Hola mundo')
})

// Utilizamos la función findAvailablePort para encontrar un puerto disponible a partir del puerto 3000
// La función findAvailablePort devuelve una promesa que se resuelve con el puerto disponible
findAvailablePort(3000).then(port => {
  // Una vez que se encuentra un puerto disponible, llamamos al método listen() del servidor para que comience a escuchar las solicitudes en ese puerto
  server.listen(port, () => {
    // Una vez que el servidor está escuchando, imprimimos un mensaje con la URL a la que se puede acceder
    console.log(`server listening on port http://localhost:${port}`)
  })
})
