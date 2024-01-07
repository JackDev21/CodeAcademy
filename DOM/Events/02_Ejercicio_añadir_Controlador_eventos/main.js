// Obtener elementos del DOM por su id y asignarlos a variables para su manipulación.
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

// Definir una función para mostrar los elementos codey y close.
let open = function () {
    codey.style.display = 'block'; // Hace visible el elemento codey.
    close.style.display = 'block'; // Hace visible el botón de cerrar.
};

// Definir una función para ocultar los elementos codey y close.
let hide = function () {
    codey.style.display = 'none'; // Oculta el elemento codey.
    close.style.display = 'none'; // Oculta el botón de cerrar.
};

// Agregar un oyente de evento de clic al botón de ver que llama a la función open.
view.addEventListener('click', open);
// Agregar un oyente de evento de clic al botón de cerrar que llama a la función hide.
close.addEventListener('click', hide);

// Función para cambiar el texto del botón de ver.
const textChange = () => {
    view.innerHTML = 'Hello, World!'; // Cambia el texto del botón de ver a "Hello, World!".
}

// Función para revertir el texto del botón de ver a su estado original.
const textReturn = () => {
    view.innerHTML = 'View'; // Revierte el texto del botón de ver a "View".
}

// Agregar un oyente de evento de clic al botón de ver que llama a la función textChange.
view.addEventListener('click', textChange);
// Agregar un oyente de evento de clic al botón de cerrar que llama a la función textReturn.
close.addEventListener('click', textReturn);