//Nombre de usuario
const username = "Jack";

// Expresion ternaria
username ? console.log(`Hello, ${username}!`) : console.log("Hello!");
//Pregunta al usuario
const userQuestion = "¿Que pregunta deseas hacer a la Bola Mágica del Ocho?";
console.log(`${userQuestion}`);

// Obtenemos un numero aleatorio con rendonde hacia abajo de 0 al7
const numberRandom = Math.floor(Math.random() * 8);
let eightBall = "";

if (numberRandom === 0) {
    eightBall = "Es posible";
} else if (numberRandom === 1) {
    eightBall = "Tal vez";
} else if (numberRandom === 2) {
    eightBall = "Por supuesto que sí!";
} else if (numberRandom === 3) {
    eightBall = "Prueba otra vez!";
} else if (numberRandom === 4) {
    eightBall = "Probablemente no";
} else if (numberRandom === 5) {
    eightBall = "Estás en lo cierto";
} else if (numberRandom === 6) {
    eightBall = "No cuentes con ello";
} else if (numberRandom === 7) {
    eightBall = "Negativo";
} else {
    eightBall = "Error";
}

console.log(eightBall);
