// Selecciona el primer elemento 'button' del documento y lo almacena en la variable 'element'
let element = document.querySelector('button');

// Define la función 'turnButtonRed'
function turnButtonRed() {
    // Establece el color de fondo del botón a rojo
    element.style.backgroundColor = 'red';
    // Establece el color del texto del botón a blanco
    element.style.color = 'white';
    // Cambia el contenido del botón a 'Red Button'
    element.innerHTML = `Red Button`;
}

// Asigna la función 'turnButtonRed' como manejador del evento 'onclick' para el botón
element.onclick = turnButtonRed;