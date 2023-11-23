console.log('hi'); // Imprime "hi" en la consola

// Función para obtener la elección del usuario
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase(); // Convierte la entrada del usuario a minúsculas
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput; // Devuelve la elección del usuario si es válida
    } else {
        console.log("Choose rock, paper, or scissors"); // Imprime un mensaje si la entrada no es válida
        return null; // Devuelve null para indicar una elección inválida
    }
};

// Función para obtener la elección aleatoria de la computadora
const getComputerChoice = () => {
    const rand = Math.floor(Math.random() * 3); // Genera un número aleatorio entre 0 y 2

    switch (rand) {
        case 0:
            return "rock"; // Devuelve "rock" si rand es 0
        case 1:
            return "paper"; // Devuelve "paper" si rand es 1
        case 2:
            return "scissors"; // Devuelve "scissors" si rand es 2
        default:
            return "Invalid choice"; // Devuelve un mensaje si rand no está entre 0 y 2
    }
};

// Función para determinar al ganador entre la elección del usuario y la de la computadora
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game is a tie"; // Retorna un empate si las elecciones son iguales
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
        return "The user won!"; // Retorna si el usuario gana con ciertas combinaciones
    } else {
        return "Computer won!"; // Retorna si la computadora gana en cualquier otro caso
    }
};

// Con operadores ternarios sería así.
/*const determineWinner = (userChoice, computerChoice) =>
userChoice === computerChoice ? "The game is a tie" : 
userChoice === "rock" ? computerChoice === "paper" ? "Computer won!" : "The user won!" : 
userChoice === "paper" ? computerChoice === "scissors" ? "Computer won!" : "The user won!" : 
userChoice === "scissors" ? computerChoice === "rock" ? "Computer won!" : "The user won!" : 
"Invalid choices"; */



// Función principal para ejecutar el juego
const playGame = () => {
    const userChoice = getUserChoice("paper"); // Obtiene la elección del usuario
    if (!userChoice) return; // Si la elección del usuario es inválida, sale de la función

    const computerChoice = getComputerChoice(); // Obtiene la elección de la computadora
    console.log(`User chose ${userChoice}`); // Imprime la elección del usuario
    console.log(`Computer chose ${computerChoice}`); // Imprime la elección de la computadora
    console.log(determineWinner(userChoice, computerChoice)); // Determina y muestra al ganador
};

playGame(); // Ejecuta la función principal para iniciar el juego


