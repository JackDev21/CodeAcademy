// Importamos el módulo fs (File System) de Node.js.
const fs = require('node:fs');

// Imprimimos un mensaje indicando que estamos leyendo el primer archivo.
console.log('Leyendo el primer archivo...');
// Utilizamos readFileSync() para leer el contenido del archivo 'archivo.txt'.
const text = fs.readFileSync('./archivo.txt', 'utf-8');
// Imprimimos el texto del primer archivo una vez que se ha leído correctamente.
console.log('primer texto', text);

// Imprimimos un mensaje indicando que podemos realizar otras tareas mientras se lee el archivo.
console.log(' ----> hacer cosas mientras lee el archivo ...');

// Imprimimos un mensaje indicando que estamos leyendo el segundo archivo.
console.log('Leyendo el segundo archivo...');
// Utilizamos readFileSync() para leer el contenido del archivo 'archivo2.txt'.
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');
// Imprimimos el texto del segundo archivo una vez que se ha leído correctamente.
console.log('segundo texto', secondText);
