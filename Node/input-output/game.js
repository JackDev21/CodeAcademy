// Generamos un número aleatorio entre 1 y 10 (inclusive) y lo convertimos a string
let secretValue = Math.floor(1 + Math.random() * 10).toString();

// Creamos un array con los números del 1 al 10 representados como strings
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// Exportamos un objeto con una función llamada testNumber
module.exports = {
  testNumber: (input) => {
    // Verificamos si el usuario ingresó 'quit' para salir del juego
    if (input === 'quit') {
      process.stdout.write('Ok. Bye!\n');
      process.exit();
    }
    // Verificamos si el input del usuario no es un número válido entre 1 y 10
    if (!numbers.includes(input)) {
      process.stdout.write('Choose a number from 1 through 10!\nIs the number ... ');
    } else if (input === secretValue) { // Si el input coincide con el número secreto, el usuario adivinó correctamente
      process.stdout.write('Woah you got it! Are you psychic? See you later!\n');
      process.exit();
    } else { // Si el input no coincide con el número secreto, el usuario debe intentar de nuevo
      process.stdout.write("Nope. Guess again!\nIs the number ... ");
    }
  }
};
