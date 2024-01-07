// Estas variables almacenan los elementos de la lista en el sidebar
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// Esta función programa el botón "Reset" para devolver los elementos a sus estilos por defecto
let reset = function () {
    itemOne.style.width = '' // Restablece el ancho del itemOne a su valor por defecto
    itemTwo.style.backgroundColor = '' // Restablece el color de fondo del itemTwo a su valor por defecto
    itemThree.innerHTML = 'The mouse must leave the box to change the text' // Restablece el texto del itemThree a su valor por defecto
    itemFive.style.display = "none" // Oculta el itemFive
};
resetButton.onclick = reset; // Asigna la función reset como manejador del evento click para el botón de reset

// Función para incrementar el ancho del itemOne
const increaseWidth = () => {
    itemOne.style.width = '500px' // Cambia el ancho del itemOne a 500px
}
itemOne.addEventListener('mouseover', increaseWidth) // Registra la función increaseWidth en el evento mouseover para itemOne

// Función para cambiar el color de fondo del itemTwo
const changeBackground = () => {
    itemTwo.style.backgroundColor = 'orange' // Cambia el color de fondo del itemTwo a naranja
}
itemTwo.addEventListener('mouseup', changeBackground) // Registra la función changeBackground en el evento mouseup para itemTwo

// Función para cambiar el texto del itemThree
const changeText = () => {
    itemThree.innerHTML = 'The mouse has left the element' // Cambia el texto del itemThree a un nuevo valor
}
itemThree.addEventListener('mouseout', changeText) // Registra la función changeText en el evento mouseout para itemThree

// Función para mostrar el itemFive
const showItem = () => {
    itemFive.style.display = 'block' // Hace visible el itemFive
}
itemFour.addEventListener('mousedown', showItem) // Registra la función showItem en el evento mousedown para itemFour