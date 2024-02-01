// Importa la función 'checkInventory' desde el archivo 'library.js'
const { checkInventory } = require('./library.js');

// Define un pedido como un arreglo de arreglos, cada uno conteniendo el nombre de un artículo y la cantidad deseada
const order = [['sunglasses', 1], ['bags', 2]];

// Define una función para manejar la resolución exitosa de la promesa de verificación del inventario
const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue); // Registra el mensaje de éxito en la consola
};

// Define una función para manejar el rechazo de la promesa de verificación del inventario
const handleFailure = (rejectReason) => {
    console.log(rejectReason); // Registra la razón del rechazo en la consola
};

// Llama a 'checkInventory' con el arreglo 'order' y encadena 'then()' para manejar una resolución exitosa de la promesa
checkInventory(order).then(handleSuccess)
    // Encadena 'catch()' para manejar cualquier error si la promesa es rechazada
    .catch(handleFailure);