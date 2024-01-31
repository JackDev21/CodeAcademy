// Importa la función 'checkInventory' del módulo 'library.js'
const { checkInventory } = require("./library.js");

// Define un arreglo de 'order' que contiene pares de elementos: un artículo y la cantidad deseada
const order = [
    ["sunglasses", 1], // 1 par de gafas de sol
    ["bags", 2],       // 2 bolsos
];

// Declara una función 'handleSuccess' que se llama cuando la promesa se resuelve exitosamente
const handleSuccess = (resolvedValue) => {
    // Imprime el valor de la resolución en la consola
    console.log(resolvedValue);
};

// Declara una función 'handleFailure' que se llama cuando la promesa es rechazada
const handleFailure = (rejectReason) => {
    // Imprime el motivo del rechazo en la consola
    console.log(rejectReason);
};

// Llama a 'checkInventory' pasando 'order' y utiliza el método 'then' para manejar la promesa
// 'handleSuccess' es el manejador de éxito y 'handleFailure' es el manejador de fallo
checkInventory(order).then(handleSuccess, handleFailure);

/*Este fragmento de código utiliza la función checkInventory, que probablemente devuelve una promesa basada en la 
disponibilidad de los artículos en el arreglo order. Cuando checkInventory se completa, dependiendo del resultado, 
se llama a handleSuccess si la promesa se resuelve (lo que indica que los artículos están disponibles) o a handleFailure
 si la promesa es rechazada (lo que indica que los artículos no están disponibles o hay algún otro problema con el pedido). */