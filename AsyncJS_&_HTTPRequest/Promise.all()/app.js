// Importamos las funciones necesarias desde el archivo library.js
let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./library.js');

// Definimos una función asíncrona llamada serveDinnerAgain.
const serveDinnerAgain = async () => {
    // Creamos un array de promesas utilizando las funciones importadas.
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

    // Utilizamos await para esperar a que todas las promesas se resuelvan antes de imprimir el mensaje final.
    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

// Llamamos a la función serveDinnerAgain para iniciar la secuencia de eventos.
serveDinnerAgain();
