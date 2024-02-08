// Importamos el módulo fs (File System) de Node.js, específicamente la versión que utiliza promesas.
const fs = require('node:fs/promises');

// Utilizamos el método readdir() de fs para leer el contenido del directorio actual ('.').
// Este método devuelve una promesa que se resolverá con un array de nombres de archivo o directorio.
fs.readdir('.')
    // Utilizamos then() para manejar el resultado exitoso de la promesa.
    .then(files => {
        // Iteramos sobre cada elemento (archivo o directorio) dentro del directorio leído.
        files.forEach(file => {
            // Imprimimos el nombre de cada archivo o directorio en la consola.
            console.log(file);
        });
    })
    // Utilizamos catch() para manejar cualquier error que ocurra durante la lectura del directorio.
    .catch(err => {
        // Imprimimos un mensaje de error en caso de que ocurra un error.
        console.error('Error al leer el directorio: ', err);
    });
