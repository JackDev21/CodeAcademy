// Importamos la función `readFile` del módulo `fs/promises` de Node.js.
import { readFile } from 'node:fs/promises';

// Usamos Promise.all() para leer ambos archivos de forma concurrente.
Promise.all([
    // Leemos el contenido del primer archivo.
    readFile('./archivo.txt', 'utf-8'),
    // Leemos el contenido del segundo archivo.
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => { // El callback de then() recibe un array con los resultados de las promesas resueltas.
    // Imprimimos el contenido del primer archivo.
    console.log('primer texto', text);
    // Imprimimos el contenido del segundo archivo.
    console.log('segundo texto', secondText);
}).catch(err => { // Manejamos cualquier error que ocurra durante la lectura de los archivos.
    console.error('Ocurrió un error al leer los archivos:', err);
});
