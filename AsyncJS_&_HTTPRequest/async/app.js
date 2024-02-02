// Definimos una función llamada withConstructor que toma un parámetro num.
function withConstructor(num) {
    // Retornamos una nueva promesa usando la palabra clave 'new Promise'.
    return new Promise((resolve, reject) => {
        // Verificamos si el parámetro num es igual a cero.
        if (num === 0) {
            // Si es cero, resolvemos la promesa con el mensaje 'zero'.
            resolve('zero');
        } else {
            // Si no es cero, resolvemos la promesa con el mensaje 'not zero'.
            resolve('not zero');
        }
    });
}

// Llamamos a la función withConstructor con el argumento 0.
withConstructor(0)
    .then((resolveValue) => {
        // Imprimimos en la consola el resultado de la promesa.
        console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
    });

// Ahora, escribimos la función withAsync usando async/await.
const withAsync = async (num) => {
    // Verificamos si el parámetro num es igual a cero.
    if (num === 0) {
        // Si es cero, retornamos el mensaje 'zero'.
        return "zero";
    } else {
        // Si no es cero, retornamos el mensaje 'not zero'.
        return "not zero";
    }
};

// Llamamos a la función withAsync con el argumento 100.
withAsync(100)
    .then((resolveValue) => {
        // Imprimimos en la consola el resultado de la promesa.
        console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
    });
