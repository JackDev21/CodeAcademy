// Crea un array de palabras
const words = ['único', 'extraño', 'pica', 'oxímoron', 'disfraz'];

// Utiliza el método 'some' para verificar si hay al menos una palabra en el array que tenga una longitud menor a 6
console.log(words.some(word => {
    return word.length < 6;
}));

// Utiliza el método 'filter' para crear un nuevo array que solo contenga palabras con una longitud mayor a 5
const interestingWords = words.filter((word) => word.length > 5);

console.log(interestingWords);


// Utiliza el método 'every' para verificar si todas las palabras en el array 'interestingWords' tienen una longitud mayor a 5
console.log(interestingWords.every((word) => {
    return word.length > 5
}));