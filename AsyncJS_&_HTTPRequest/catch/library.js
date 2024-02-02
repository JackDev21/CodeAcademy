// Esta función devuelve true el 50% de las veces.
let randomSuccess = () => {
    // Generamos un número aleatorio entre 0 y 1.
    let num = Math.random();

    // Comprobamos si el número es menor que 0.5.
    if (num < 0.5) {
        // Si es menor, devolvemos true.
        return true;
    } else {
        // Si no es menor, devolvemos false.
        return false;
    }
};

// Esta función devuelve una promesa que se resuelve la mitad de las veces y se rechaza la otra mitad.
let cookBeanSouffle = () => {
    // Devolvemos una nueva promesa utilizando la palabra clave 'new Promise'.
    return new Promise((resolve, reject) => {
        // Imprimimos en la consola un mensaje indicando que estamos poniendo el Bean Souffle en el horno.
        console.log('Fingers crossed... Putting the Bean Souffle in the oven');

        // Utilizamos setTimeout para simular el tiempo que tomaría cocinar el Bean Souffle.
        setTimeout(() => {
            // Llamamos a la función randomSuccess para determinar si la cocción fue exitosa.
            let success = randomSuccess();

            // Si la cocción fue exitosa, resolvemos la promesa con el resultado 'Bean Souffle'.
            if (success) {
                resolve('Bean Souffle');
            } else {
                // Si la cocción no fue exitosa, rechazamos la promesa con el mensaje 'Dinner is ruined!'.
                reject('Dinner is ruined!');
            }
        }, 1000);
    });
};

// Exportamos la función cookBeanSouffle para poder utilizarla en otros archivos.
module.exports = cookBeanSouffle;
