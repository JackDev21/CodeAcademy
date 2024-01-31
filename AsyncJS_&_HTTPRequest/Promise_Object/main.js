// Define un objeto 'inventory' que representa el inventario de una tienda con tres artículos y sus cantidades
const inventory = {
    sunglasses: 1, // 1 par de gafas de sol
    pants: 1088,   // 1088 pantalones
    bags: 1344     // 1344 bolsos
};



// Declara la función 'myExecutor' que toma dos funciones como argumentos: 'resolve' y 'reject'
const myExecutor = (resolve, reject) => {
    // Comprueba si hay gafas de sol en el inventario
    if (inventory.sunglasses > 0) {
        // Si hay gafas de sol, llama a 'resolve' con un mensaje de éxito
        resolve("Sunglasses order processed.");
    } else {
        // Si no hay gafas de sol, llama a 'reject' con un mensaje de error
        reject("That item is sold out.");
    }
};

// Declara la función 'orderSunglasses' que devuelve una nueva promesa creada pasando 'myExecutor'
const orderSunglasses = () => {
    return new Promise(myExecutor);
};

// Llama a 'orderSunglasses' y almacena la promesa resultante en 'orderPromise'
let orderPromise = orderSunglasses();

// Imprime la promesa 'orderPromise' en la consola
console.log(orderPromise);