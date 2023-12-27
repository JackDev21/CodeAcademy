// Definición de la función sortYears que toma un array de años como argumento
const sortYears = (arr) => {
    // Define una función interna llamada checkYears que toma dos años como argumentos y los compara para ordenarlos
    const checkYears = (year1, year2) => year2 - year1;

    // Utiliza el método sort en el array de años (arr) y le pasa la función checkYears como criterio de ordenamiento
    // Esta función de comparación ordena los elementos de arr según el resultado de year2 - year1 (descendente)
    return arr.sort(checkYears);
}

// Array de años
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

// Llama a la función sortYears con el array de años como argumento
// Imprime el resultado en la consola
console.log(sortYears(years));
// Debería imprimir [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
