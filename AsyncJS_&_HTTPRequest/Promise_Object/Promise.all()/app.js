// Importamos la función checkAvailability desde el archivo 'library.js'.
const { checkAvailability } = require('./library.js');

// Definimos una función onFulfill que se ejecutará cuando todas las promesas se resuelvan correctamente.
const onFulfill = (itemsArray) => {
    console.log(`Artículos verificados: ${itemsArray}`);
    console.log(`Todos los artículos estaban disponibles en el distribuidor. ¡Procediendo a hacer el pedido ahora!`);
};

// Definimos una función onReject que se ejecutará si alguna de las promesas es rechazada.
const onReject = (rejectionReason) => {
    console.log(rejectionReason);
};

// Realizamos tres verificaciones de disponibilidad para diferentes artículos en el mismo distribuidor ('Favorite Supply Co.').
const checkSunglasses = checkAvailability('gafas de sol', 'Favorite Supply Co.');
const checkPants = checkAvailability('pantalones', 'Favorite Supply Co.');
const checkBags = checkAvailability('bolsas', 'Favorite Supply Co.');

// Utilizamos Promise.all para esperar a que todas las promesas se resuelvan o alguna se rechace.
Promise.all([checkSunglasses, checkPants, checkBags])
    .then(onFulfill) // Si todas las promesas se resuelven, ejecutamos la función onFulfill.
    .catch(onReject); // Si alguna promesa se rechaza, ejecutamos la función onReject.
