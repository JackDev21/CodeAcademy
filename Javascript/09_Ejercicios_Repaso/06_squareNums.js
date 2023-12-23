const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

// Write your code here:

const squareNums = (numbers) => numbers.map(num => num * num) // const squareNums = (numbers) => numbers.map(toSquare);
// Usamos map para iterar sobre el array y luego usamos la función toSquare para elevar cada número al cuadrado. 
//El resultado se almacena en un nuevo array. El array original no se modifica.

console.log(squareNums(numbers));
