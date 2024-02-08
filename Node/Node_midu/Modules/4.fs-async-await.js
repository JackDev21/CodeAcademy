
// Importamos la función `readFile` del módulo `fs/promises` de Node.js utilizando la sintaxis de desestructuración de objetos.
const { readFile } = require('node:fs/promises');

// Definimos una IIFE (Immediately Invoked Function Expression) utilizando una función flecha asíncrona.

//IIFE - Immediately Invoked Function Expression
/*(() => {

})()*/


(
    async () => {
        // Imprimimos un mensaje indicando que estamos leyendo el primer archivo.
        console.log('Leyendo el primer archivo...');

        // Utilizamos `await` junto con `readFile()` para leer el contenido del archivo 'archivo.txt'.
        // La palabra clave `await` pausa la ejecución de la función hasta que la promesa devuelta por `readFile()` se resuelve.
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
)();

// Este código aprovecha las funciones asíncronas y `await`, lo que hace que el flujo de ejecución sea más fácil de entender y manejar en comparación con el uso de callbacks o promesas.
// Además, el uso de IIFE asegura que el código se ejecute inmediatamente después de su definición.
