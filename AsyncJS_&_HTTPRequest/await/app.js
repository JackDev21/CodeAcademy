// Importamos la función brainstormDinner desde el archivo library.js
const brainstormDinner = require('./libray.js');

// Versión con promesas nativas:
function nativePromiseDinner() {
    // Llamamos a brainstormDinner y encadenamos una promesa usando then.
    brainstormDinner().then((meal) => {
        // Imprimimos en la consola el resultado de la promesa.
        console.log(`I'm going to make ${meal} for dinner.`);
    });
}

// Llamamos a la función que utiliza promesas nativas.
//nativePromiseDinner();

// Versión con async/await:
async function announceDinner() {
    // Utilizamos la palabra clave await para esperar a que la promesa se resuelva.
    let meal = await brainstormDinner();

    // Imprimimos en la consola el resultado de la promesa.
    console.log(`I'm going to make ${meal} for dinner.`);
}

// Llamamos a la función que utiliza async/await.
announceDinner();
