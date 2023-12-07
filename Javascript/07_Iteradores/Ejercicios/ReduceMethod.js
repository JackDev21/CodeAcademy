// Define un array de números
const newNumbers = [1, 3, 5, 7];

// Utiliza el método reduce() para calcular la suma de los números en el array
const newSum = newNumbers.reduce((acumulador, valorActual) => {
    // Imprime el valor del acumulador
    console.log(`El valor del acumulador: ${acumulador}`);
    // Imprime el valor del valorActual
    console.log(`El valor del valorActual: ${valorActual}`);
    // Suma el valorActual al acumulador y devuelve el resultado
    return acumulador + valorActual
},
    // Establece el valor inicial del acumulador en 10
    10)

// Imprime la suma final
console.log(newSum)