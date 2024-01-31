// Define un objeto 'inventory' que contiene el inventario actual de la tienda
const inventory = {
    sunglasses: 1900, // 1900 gafas de sol disponibles
    pants: 1088,      // 1088 pantalones disponibles
    bags: 1344        // 1344 bolsos disponibles
};

// Declara una función 'checkInventory', que toma un arreglo 'order' como argumento
const checkInventory = (order) => {
    // Retorna una nueva Promesa
    return new Promise((resolve, reject) => {
        // Establece un temporizador para simular una operación asincrónica, como la verificación del inventario
        setTimeout(() => {
            // Verifica si cada artículo en el pedido está en stock en la cantidad solicitada
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                // Si todos los artículos están en stock, resuelve la promesa con un mensaje de éxito
                resolve(`Thank you. Your order was successful.`);
            } else {
                // Si algún artículo no está en stock, rechaza la promesa con un mensaje de error
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000); // La verificación del inventario ocurre después de 1 segundo
    })
};

// Exporta 'checkInventory' para que pueda ser importada y utilizada en otros módulos
module.exports = { checkInventory };

/*Este código define un módulo JavaScript que administra el inventario de una tienda y proporciona una función 
checkInventory para verificar si un pedido puede ser cumplido con base en el inventario actual. Esta función 
devuelve una promesa que se resuelve o se rechaza después de un retraso simulado de 1 segundo, lo que podría 
representar el tiempo de procesamiento de la verificación del inventario en una aplicación real. El módulo luego
 exporta la función checkInventory para que pueda ser utilizada en otros archivos. */