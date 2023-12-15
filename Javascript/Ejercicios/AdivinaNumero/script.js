let humanScore = 0; // Inicializando el puntaje del humano
let computerScore = 0; // Inicializando el puntaje de la computadora
let currentRoundNumber = 1; // Inicializando el número de ronda actual

// Función para generar un número objetivo aleatorio entre 0 y 9
const generateTarget = () => {
    let randomNumber = Math.floor(Math.random() * 9); // Genera un número aleatorio entre 0 y 8 (sin incluir 9)
    return randomNumber; // Devuelve el número aleatorio como el objetivo
}

// Función para comparar las suposiciones del usuario y la computadora con el número objetivo
const compareGuesses = (user, computer, target) => {
    if (user < 0 || user > 9) { // Comprueba si la suposición del usuario está fuera del rango válido (0 a 9)
        alert('Introduzca un número entre 0 y 9.'); // Avisa al usuario si la entrada es inválida
    }
    const userDif = Math.abs(user - target); // Calcula la diferencia absoluta entre la suposición del usuario y el objetivo
    const computerDif = Math.abs(computer - target); // Calcula la diferencia absoluta entre la suposición de la computadora y el objetivo

    // Compara las diferencias y devuelve true si la suposición del usuario está más cerca o igual de cerca al objetivo, false en caso contrario
    return userDif <= computerDif;

    //Se puede hacer como la fomra de arriba ó la forma de abajo.
    /*if (userDif <= computerDif) {
        return true;
    } else {
        return false;
    }*/
}

// Función para actualizar los puntajes basándose en el ganador de una ronda
const updateScore = (winner) => {
    if (winner === 'human') { // Si el humano gana la ronda
        humanScore += 1; // Incrementa el puntaje del humano en 1
    } else if (winner === 'computer') { // Si la computadora gana la ronda
        computerScore += 1; // Incrementa el puntaje de la computadora en 1
    }
}

// Función para avanzar a la siguiente ronda incrementando el número de ronda actual
const advanceRound = () => {
    currentRoundNumber += 1; // Incrementa el número de ronda en 1
}

// Ejemplo de uso de la función compareGuesses con valores de ejemplo y mostrando el resultado
console.log(compareGuesses(4, 5, 5)); // Esto mostrará true o false según la comparación de las suposiciones
