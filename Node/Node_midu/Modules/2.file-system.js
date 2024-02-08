const fs = require('node:fs') // El module fs nos permite trabajar con archivos y directorios

const stats = fs.statSync('./archivo.txt') // El método statSync() nos permite obtener información sobre un archivo o directorio

console.log(
    stats.isFile(), // stats.isFile() nos permite saber si es un archivo
    stats.isDirectory(), // stats.isDirectory() nos permite saber si es un directorio
    stats.isSymbolicLink(), // stats.isSymbolicLink() nos permite saber si es un enlace simbolico
    stats.size, // stats.size nos permite saber el tamaño del archivo
)