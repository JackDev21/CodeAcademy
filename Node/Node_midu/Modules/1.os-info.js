const os = require('node:os') // El module os nos permite obtener informacion del sistema operativo.

console.log(`       Informacion del sistema operativo:`)
console.log('|-----------------------------------------------|')

console.log('Nombre del sistema operativo', os.platform()) // os.platform devuelve el nombre del sistema operativo
console.log('Versión del sistema operativo', os.release()) // os.release devuelve la versión del sistema operativo
console.log('Arquitectura del sistema operativo', os.arch()) // os.arch devuelve la arquitectura del sistema operativo
console.log('CPUs', os.cpus()) // os.cpus devuelve la información de las CPUs
console.log('Memoria total', os.totalmem() / 1024 / 1024) // os.totalmem devuelve la memoria total del sistema y se divide entre 1024 para convertir a MB porque esta en bytes
console.log('Memoria libre', os.freemem() / 1024 / 1024) // os.freemem devuelve la memoria libre del sistema 
console.log('uptime', os.uptime() / 60 / 60) // os.uptime devuelve el tiempo de actividad del sistema en segundos