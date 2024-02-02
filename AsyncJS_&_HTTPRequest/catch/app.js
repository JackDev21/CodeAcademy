// Importamos la función cookBeanSouffle desde el archivo library.js
const cookBeanSouffle = require('./library.js');

// Definimos una función asíncrona llamada hostDinnerParty.
const hostDinnerParty = async () => {
    try {
        // Utilizamos la palabra clave await para esperar a que la función cookBeanSouffle() devuelva una promesa resuelta.
        let dinner = await cookBeanSouffle();

        // Imprimimos en la consola que la cena está servida.
        console.log(`${dinner} is served!`);
    } catch (error) {
        // En caso de que ocurra un error, imprimimos el error en la consola.
        console.log(error);

        // Además, imprimimos que vamos a pedir una pizza como solución de respaldo.
        console.log('Ordering a pizza!');
    }
}

// Llamamos a la función hostDinnerParty para iniciar la secuencia de eventos.
hostDinnerParty();
