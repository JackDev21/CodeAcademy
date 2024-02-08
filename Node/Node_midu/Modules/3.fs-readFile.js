// Importamos el módulo fs (File System) de Node.js, que nos permite trabajar con archivos y directorios.
const fs = require('node:fs');

// Imprimimos un mensaje indicando que estamos leyendo el primer archivo.
console.log('Leyendo el primer archivo...');

// Utilizamos el método readFile() de fs para leer el contenido del archivo 'archivo.txt'.
// Este método es asíncrono, por lo que pasamos un callback que se ejecutará cuando la lectura del archivo esté completa o si hay algún error.
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    // Imprimimos el contenido del archivo si se leyó correctamente.
    console.log(text);
});

// Imprimimos un mensaje para indicar que se pueden realizar otras tareas mientras se lee el archivo.
console.log('----> Hacer cosas mientras lee el archivo...');

// Imprimimos un mensaje indicando que estamos leyendo el segundo archivo.
console.log('Leyendo el segundo archivo...');

// Utilizamos el método readFile() de fs para leer el contenido del archivo 'archivo2.txt'.
// Al igual que antes, pasamos un callback para manejar el resultado de la lectura.
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    // Imprimimos el contenido del segundo archivo si se leyó correctamente.
    console.log(text);
});

// Nota: La ejecución de los mensajes de "Leyendo el primer archivo..." y "Leyendo el segundo archivo..."
// no esperará a que se complete la lectura de los archivos, ya que readFile() es asíncrono.
// Por lo tanto, estos mensajes se imprimirán antes o durante el proceso de lectura de los archivos.
