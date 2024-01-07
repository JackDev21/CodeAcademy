// Array de mensajes de fortuna para ser mostrados al usuario.
let fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A smile is your personal welcome mat.",
    "All your hard work will soon pay off."
];

// Obtener el botón de la fortuna y el elemento donde se mostrará la fortuna desde el DOM.
let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

// Función para seleccionar una fortuna al azar del array fortunes.
function fortuneSelector() {
    let randomFortune = Math.floor(Math.random() * fortunes.length); // Calcular un índice aleatorio.
    return fortunes[randomFortune]; // Devolver la fortuna seleccionada.
}

// Función que se llama cuando el usuario hace clic en el botón de la fortuna.
function showFortune() {
    fortune.innerHTML = fortuneSelector(); // Mostrar una nueva fortuna aleatoria.
    button.innerHTML = "Come back tomorrow!"; // Cambiar el texto del botón.
    button.style.cursor = "default"; // Cambiar el cursor a predeterminado para indicar que el botón no se puede clickear de nuevo.

    // Remover el listener del evento de clic para evitar que se muestre otra fortuna.
    button.removeEventListener('click', showFortune);
}

// Agregar un listener para el evento de clic en el botón para mostrar la fortuna cuando se haga clic.
button.addEventListener('click', showFortune);