// Se obtiene un elemento del DOM y se almacena en la variable "ball"
let ball = document.getElementById('float-circle');

// Esta función establece la propiedad CSS 'bottom' del elemento "ball" a '550px' cuando se invoca
const up = () => {
    ball.style.bottom = '550px'
}
// Se añade un 'event listener' al objeto document para escuchar cuando se presiona una tecla
// Al presionar una tecla, se ejecuta la función "up"
document.addEventListener('keydown', up)

// Esta función establece la propiedad CSS 'bottom' del elemento "ball" a '50px' cuando se invoca
const down = () => {
    ball.style.bottom = '50px'
}
// Se añade un 'event listener' al objeto document para escuchar cuando se suelta una tecla
// Al soltar una tecla, se ejecuta la función "down"
document.addEventListener('keyup', down)

/*En este código, se está manipulando la posición de un elemento HTML con id 'float-circle' que se supone 
representa una pelota. Las funciones up y down cambian la posición vertical de la pelota al modificar la propiedad CSS bottom.

Cuando se presiona una tecla (keydown), se invoca la función up, que mueve la pelota a una posición más alta en la pantalla 
(550px desde el borde inferior). Cuando se suelta la tecla (keyup), se invoca la función down, que mueve la pelota a una posición
 más baja en la pantalla (50px desde el borde inferior). Estas acciones simulan la pelota moviéndose hacia arriba y hacia abajo. */