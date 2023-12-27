// Definición de la función justCoolStuff que toma dos arrays como argumentos
const justCoolStuff = (arr1, arr2) => {
    // Utiliza el método filter en el primer array (arr1)
    // Para cada elemento en arr1, verifica si está presente en arr2 utilizando includes
    // Retorna un nuevo array (newArray) que contiene solo los elementos presentes en ambos arrays
    const newArray = arr1.filter(item => arr2.includes(item));
    // Devuelve el nuevo array con los elementos comunes
    return newArray;
}

// Dos arrays definidos con elementos
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = ['rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

// Llama a la función justCoolStuff con los dos arrays como argumentos
// Imprime el resultado en la consola
console.log(justCoolStuff(myStuff, coolStuff));
// Debería imprimir [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
