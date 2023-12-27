// Array de objetos que contiene información sobre especies y el número de dientes
const speciesArray = [
    { speciesName: 'shark', numTeeth: 50 },
    { speciesName: 'dog', numTeeth: 42 },
    { speciesName: 'alligator', numTeeth: 80 },
    { speciesName: 'human', numTeeth: 32 }
];

// Definición de la función sortSpeciesByTeeth que toma un array de objetos como argumento
const sortSpeciesByTeeth = (arr) => {
    // Utiliza el método sort en el array arr para ordenar los objetos según el número de dientes
    // La función de comparación compara numTeeth de speciesObj1 con numTeeth de speciesObj2
    // El retorno de la resta determina el orden ascendente de los objetos
    return arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth - speciesObj2.numTeeth);
};

// Llama a la función sortSpeciesByTeeth con speciesArray como argumento
// Imprime el resultado ordenado en la consola
console.log(sortSpeciesByTeeth(speciesArray));
