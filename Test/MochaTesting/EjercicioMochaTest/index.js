// Definición de un objeto llamado Calculate
const Calculate = {
    // Método sum que recibe un array como parámetro
    sum(inputArray) {
        // Verifica si el array está vacío
        if (inputArray.length === 0) {
            // Si está vacío, devuelve 0
            return 0;
        }

        // Utiliza el método reduce para sumar todos los valores del array
        const result = inputArray.reduce((sum, value) => {
            // Suma el valor actual al acumulador
            return sum + value;
        });

        // Devuelve el resultado de la suma
        return result;
    }
}

// Exporta el objeto Calculate para que pueda ser utilizado en otros archivos
module.exports = Calculate;
