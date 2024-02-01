// Importar las funciones necesarias desde el archivo 'library.js'
const { checkInventory, processPayment, shipOrder } = require('./library.js');

// Definir un objeto de pedido con ítems y saldo de tarjeta de regalo
const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
};

// Llamar a la función checkInventory con el objeto de pedido
checkInventory(order)
    .then((resolvedValueArray) => {
        // El inventario ha sido verificado con éxito, ahora procesar el pago
        // y retornar la promesa de la función processPayment
        return processPayment(resolvedValueArray);
    })
    .then((resolvedValueArray) => {
        // El pago ha sido procesado con éxito, ahora enviar el pedido
        // y retornar la promesa de la función shipOrder
        return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
        // Todas las promesas anteriores han sido resueltas con éxito,
        // imprimir el mensaje de éxito que indica que el pedido ha sido enviado
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        // Capturar cualquier error que ocurra durante el proceso
        console.log(errorMessage);
    });
