// Definición del objeto de la tienda con inventario y costo de los productos
const store = {
    sunglasses: {
        inventory: 817,
        cost: 9.99
    },
    pants: {
        inventory: 236,
        cost: 7.99
    },
    bags: {
        inventory: 17,
        cost: 12.99
    }
};

// Función para verificar el inventario de la tienda
const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Extraer la lista de ítems y verificar si todos están en stock
            const itemsArr = order.items;
            let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);

            if (inStock) {
                // Calcular el costo total del pedido si todos los ítems están en stock
                let total = 0;
                itemsArr.forEach(item => {
                    total += item[1] * store[item[0]].cost
                });
                console.log(`Todos los ítems están en stock. El costo total del pedido es ${total}.`);
                resolve([order, total]);
            } else {
                reject(`El pedido no se pudo completar porque algunos ítems están agotados.`);
            }
        }, generateRandomDelay());
    });
};

// Función para procesar el pago del pedido
const processPayment = (responseArray) => {
    const order = responseArray[0];
    const total = responseArray[1];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Verificar si el saldo de la tarjeta de regalo es suficiente para cubrir el costo total
            let hasEnoughMoney = order.giftcardBalance >= total;

            if (hasEnoughMoney) {
                console.log(`Pago procesado con tarjeta de regalo. Generando etiqueta de envío.`);
                let trackingNum = generateTrackingNumber();
                resolve([order, trackingNum]);
            } else {
                reject(`No se puede procesar el pedido: saldo insuficiente en la tarjeta de regalo.`);
            }

        }, generateRandomDelay());
    });
};

// Función para enviar el pedido una vez que el pago ha sido procesado
const shipOrder = (responseArray) => {
    const order = responseArray[0];
    const trackingNum = responseArray[1];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`El pedido ha sido enviado. El número de seguimiento es: ${trackingNum}.`);
        }, generateRandomDelay());
    });
};

// Función para generar un número de seguimiento aleatorio
function generateTrackingNumber() {
    return Math.floor(Math.random() * 1000000);
}

// Función para generar un retraso aleatorio simulando operaciones asíncronas
function generateRandomDelay() {
    return Math.floor(Math.random() * 2000);
}

// Exportar las funciones para su uso en otros archivos
module.exports = { checkInventory, processPayment, shipOrder };
