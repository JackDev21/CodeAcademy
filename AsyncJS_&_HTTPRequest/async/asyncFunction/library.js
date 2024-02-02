// Definimos la función shopForBeans como una arrow function.
const shopForBeans = () => {
    // Devolvemos una nueva promesa utilizando la palabra clave 'new Promise'.
    return new Promise((resolve, reject) => {
        // Definimos un array con diferentes tipos de frijoles.
        const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];

        // Utilizamos setTimeout para simular una acción asincrónica, como ir a la tienda y comprar frijoles.
        setTimeout(() => {
            // Generamos un índice aleatorio para seleccionar un tipo de frijol al azar.
            let randomIndex = Math.floor(Math.random() * beanTypes.length);

            // Seleccionamos el tipo de frijol utilizando el índice aleatorio.
            let beanType = beanTypes[randomIndex];

            // Imprimimos en la consola que hemos comprado un tipo específico de frijol debido a una oferta.
            console.log(`2. I bought ${beanType} beans because they were on sale.`);

            // Resolvemos la promesa con el tipo de frijol comprado.
            resolve(beanType);
        }, 1000);
    });
};

// Exportamos la función para poder utilizarla en otros archivos.
module.exports = shopForBeans;
