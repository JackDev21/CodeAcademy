const Calculate = {
    factorial(inputNumber) {
        // Inicializa el resultado a 1
        let result = 1;

        // Manejo especial para el caso cuando inputNumber es 0
        if (inputNumber === 0) {
            return 1;
        }

        // Calcula el factorial utilizando un bucle
        for (let i = inputNumber; i > 0; i--) {
            result *= i;
        }

        // Devuelve el resultado
        return result;
    },
};

module.exports = Calculate;
