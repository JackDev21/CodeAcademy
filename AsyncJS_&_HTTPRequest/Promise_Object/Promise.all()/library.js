// Definimos una función llamada checkAvailability que toma dos parámetros: itemName (nombre del artículo) y distributorName (nombre del distribuidor).
const checkAvailability = (itemName, distributorName) => {
    // Mostramos un mensaje en la consola indicando que estamos verificando la disponibilidad del artículo en el distribuidor.
    console.log(`Verificando disponibilidad de ${itemName} en ${distributorName}...`);

    // Retornamos una nueva promesa que manejará la lógica asincrónica de la verificación de disponibilidad.
    return new Promise((resolve, reject) => {
        // Utilizamos setTimeout para simular una demora en la respuesta del distribuidor (1 segundo en este caso).
        setTimeout(() => {
            // Verificamos si la función restockSuccess devuelve true, simula un 80% de éxito en el restablecimiento de inventario.
            if (restockSuccess()) {
                // Si el artículo está disponible, mostramos un mensaje en la consola indicando que está en stock en el distribuidor.
                console.log(`${itemName} está en stock en ${distributorName}`);
                // Resolvemos la promesa con el nombre del artículo como valor.
                resolve(itemName);
            } else {
                // Si el artículo no está disponible, rechazamos la promesa con un mensaje de error.
                reject(`Error: ${itemName} no está disponible en ${distributorName} en este momento.`);
            }
        }, 1000); // El tiempo de espera de 1 segundo simula la espera de una respuesta del distribuidor.
    });
};

// Exportamos la función checkAvailability para que pueda ser utilizada en otros archivos.
module.exports = { checkAvailability };

// Esta es una función que devuelve true el 80% de las veces.
// La utilizamos para simular que la solicitud al distribuidor tiene éxito en este porcentaje.
function restockSuccess() {
    return (Math.random() > .2);
}
