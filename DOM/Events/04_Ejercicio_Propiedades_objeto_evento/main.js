// Asignación de elementos del DOM a variables
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Declaración de una función llamada sharePhoto
let sharePhoto = function (event) {
    // Oculta el botón de compartir al hacer clic en él
    event.target.style.display = 'none';

    // Actualiza el contenido del elemento con ID 'text' para mostrar un mensaje
    // Indica que se compartió la foto del cachorro y el tiempo transcurrido
    text.innerHTML = 'You shared the puppy photo in ' + event.timeStamp + ' ms.';
}

// Agregar un event listener al botón de compartir
share.addEventListener('click', sharePhoto);


/*Se asignan elementos del Document Object Model (DOM) a variables para referirse a ellos fácilmente más adelante.

Se declara una función llamada sharePhoto que se activa cuando se hace clic en el botón de compartir.
Esta función oculta el botón y actualiza el elemento de texto (<div>, <p>, u otro elemento con ID 'text') para mostrar un mensaje 
que indica que se compartió la foto del cachorro y el tiempo transcurrido desde que se cargó la página.

Se agrega un "escuchador" de eventos al botón de compartir (share). 
Esto significa que cuando se hace click en ese botón, se ejecutará la función sharePhoto que se definió anteriormente.*/