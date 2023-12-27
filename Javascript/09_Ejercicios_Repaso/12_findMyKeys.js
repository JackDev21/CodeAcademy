// Definición de la función findMyKeys que toma un array como argumento
const findMyKeys = (arr) => {
    // Utiliza el método findIndex en el array arr para buscar la posición del elemento que sea igual a "keys"
    // La función de callback verifica cada elemento y devuelve true si encuentra "keys", lo que devuelve su índice
    return arr.findIndex(element => element === "keys");
};

// Array de elementos random
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

// Imprime el índice donde se encuentra "keys" en el array
console.log(findMyKeys(randomStuff));
// Debería imprimir 4
