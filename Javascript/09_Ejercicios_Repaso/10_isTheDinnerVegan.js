// Definición de la función isTheDinnerVegan que toma un array de objetos como argumento
const isTheDinnerVegan = (arr) => {
    // Utiliza el método every en el array arr para verificar si todos los elementos cumplen una condición
    // La condición verifica si el atributo source de cada objeto es igual a "plant"
    return arr.every(element => element.source === "plant");
}

// Array de objetos que representan elementos de la cena con su nombre y fuente de origen
const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' },
    { name: 'dessert twinkies', source: 'unknown' }
];

// Llama a la función isTheDinnerVegan con el array de objetos dinner como argumento
console.log(isTheDinnerVegan(dinner));
// Debería imprimir false
