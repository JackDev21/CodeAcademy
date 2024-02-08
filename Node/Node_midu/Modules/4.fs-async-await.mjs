// Importamos la función `readFile` del módulo `fs/promises` de Node.js.
import { readFile } from 'node:fs/promises';

// Definimos una función asíncrona para poder utilizar la palabra clave `await`.
async function leerArchivos() {
    // Imprimimos un mensaje indicando que estamos leyendo el primer archivo.
    console.log('Leyendo el primer archivo...');

    // Utilizamos `await` junto con `readFile()` para leer el contenido del archivo 'archivo.txt'.
    const text = await readFile('./archivo.txt', 'utf-8');

    // Imprimimos el texto del primer archivo una vez que se ha leído correctamente.
    console.log('primer texto', text);

    // Imprimimos un mensaje indicando que podemos realizar otras tareas mientras se lee el archivo.
    console.log('----> Hacer cosas mientras lee el archivo...');

    // Imprimimos un mensaje indicando que estamos leyendo el segundo archivo.
    console.log('Leyendo el segundo archivo...');

    // Utilizamos `await` nuevamente junto con `readFile()` para leer el contenido del archivo 'archivo2.txt'.
    const secondText = await readFile('./archivo2.txt', 'utf-8');

    // Imprimimos el texto del segundo archivo una vez que se ha leído correctamente.
    console.log('segundo texto', secondText);
}

// Llamamos a la función asíncrona para ejecutar el código.
leerArchivos();
