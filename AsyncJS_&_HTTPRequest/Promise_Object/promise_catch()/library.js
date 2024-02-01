// Actualiza el objeto 'inventory' para reflejar los nuevos niveles de stock
const inventory = {
    sunglasses: 0,    // 0 gafas de sol disponibles
    pants: 1088,      // 1088 pantalones disponibles
    bags: 1344        // 1344 bolsos disponibles
};

// Define una función 'checkInventory' que toma un pedido como argumento
const checkInventory = (order) => {
    // Retorna una nueva Promesa
    return new Promise((resolve, reject) => {
        // Establece un temporizador para simular una operación asincrónica
        setTimeout(() => {
            // Verifica que cada artículo pedido esté disponible en la cantidad requerida
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                // Si todos los artículos están en stock, resuelve la promesa con un mensaje de éxito
                resolve(`Thank you. Your order was successful.`);
            } else {
                // Si algún artículo no está en stock, rechaza la promesa con un mensaje de error
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000); // La verificación del inventario ocurre después de 1 segundo
    });
};

// Exporta la función 'checkInventory' para que pueda ser usada en otros archivos
module.exports = { checkInventory };