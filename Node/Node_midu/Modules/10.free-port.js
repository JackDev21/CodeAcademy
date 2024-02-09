// Importamos el módulo net de Node.js, que proporciona funcionalidades para la comunicación de red.
const net = require('node:net')

// Definimos una función llamada findAvailablePort que encuentra un puerto disponible a partir del puerto deseado.
const findAvailablePort = (desiredPort) => {
  // Devolvemos una nueva promesa que resuelve con el puerto disponible.
  return new Promise((resolve, reject) => {
    // Creamos un servidor TCP utilizando net.createServer().
    const server = net.createServer()

    // Intentamos conectar el servidor al puerto deseado.
    server.listen(desiredPort, () => {
      // Si la conexión es exitosa, obtenemos el número de puerto asignado por el sistema operativo.
      const port = server.address().port
      // Luego, cerramos el servidor para liberar el puerto.
      server.close(() => {
        // Resolvemos la promesa con el puerto disponible.
        resolve(port)
      })
    })

    // Manejamos el evento 'error' del servidor en caso de que ocurra un error.
    server.on('error', (err) => {
      // Si el error es debido a que el puerto está en uso (EADDRINUSE),
      // llamamos recursivamente a la función findAvailablePort con el siguiente puerto (desiredPort + 1).
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(desiredPort + 1).then(port => resolve(port))
      } else {
        // Si se produce cualquier otro tipo de error, rechazamos la promesa con el error.
        reject(err)
      }
    })
  })
}

// Exportamos la función findAvailablePort para que pueda ser utilizada en otros archivos.
module.exports = { findAvailablePort }
