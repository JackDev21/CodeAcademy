// Importamos las funciones necesarias desde el archivo library.js
let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./library.js');

// Definimos una función asíncrona llamada serveDinner.
const serveDinner = async () => {
    // Creamos promesas para cada componente de la cena utilizando las funciones importadas.
    let vegetablePromise = steamBroccoli();
    let starchPromise = cookRice();
    let proteinPromise = bakeChicken();
    let sidePromise = cookBeans();

    // Utilizamos await para esperar a que cada promesa se resuelva antes de imprimir el mensaje final.
    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

// Llamamos a la función serveDinner para iniciar la secuencia de eventos.
serveDinner();
