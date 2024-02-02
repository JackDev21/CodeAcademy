// Importamos la función shopForBeans desde el archivo library.js
const shopForBeans = require('./library.js');

// Definimos una función asíncrona llamada getBeans.
async function getBeans() {
    // Imprimimos en la consola que estamos yendo a la tienda para comprar frijoles.
    console.log(`1. Heading to the store to buy beans...`);

    // Utilizamos la palabra clave await para esperar a que la función shopForBeans() devuelva una promesa resuelta.
    let value = await shopForBeans();

    // Imprimimos en la consola que hemos comprado los frijoles y estamos listos para la cena.
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

// Llamamos a la función getBeans.
getBeans();
