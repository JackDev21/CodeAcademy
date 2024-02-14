// Importamos la función testNumber desde el archivo game.js
let { testNumber } = require('./game.js');

// Mostramos un mensaje al usuario en la consola
process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

// Definimos una función llamada playGame que toma el input del usuario y ejecuta la función testNumber con dicho input
let playGame = (userInput) => {
  // Convertimos el input a string y eliminamos los espacios en blanco al principio y al final
  let input = userInput.toString().trim();
  // Llamamos a la función testNumber con el input del usuario
  testNumber(input);
};

// Escuchamos eventos de entrada de datos desde el usuario (stdin) y llamamos a la función playGame cuando ocurra
process.stdin.on('data', playGame)
