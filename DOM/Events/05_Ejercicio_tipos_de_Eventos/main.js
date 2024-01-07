// Esta variable almacena el botón "Pick a Color"
let button = document.getElementById('color-button');

// Esta variable almacena el botón "Mystery Color"
let mysteryButton = document.getElementById('next-button');

// Esta función de número aleatorio creará códigos de color para la variable randomColor
function colorValue() {
    // Retorna un valor entero aleatorio entre 0 y 255.
    return Math.floor(Math.random() * 256);
}

// Esta función cambia el color de fondo del objetivo del evento al que se le hizo clic o se le pasó la rueda del ratón
function colorChange(event) {
    // Crea una cadena de color RGB con valores aleatorios para cada componente del color
    let randomColor = `rgb(${colorValue()}, ${colorValue()}, ${colorValue()})`
    // Aplica el color de fondo aleatorio al elemento que disparó el evento
    event.target.style.backgroundColor = randomColor
}

// Agrega un listener de evento al botón "Pick a Color" para que cambie de color al hacer clic
button.addEventListener('click', colorChange);

// Agrega un listener de evento al botón "Mystery Color" para que cambie de color al girar la rueda del ratón sobre él
mysteryButton.addEventListener('wheel', colorChange);