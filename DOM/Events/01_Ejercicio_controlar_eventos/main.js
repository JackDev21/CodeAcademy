// Selecciona el elemento con el ID 'read-more' y lo almacena en la variable 'readMore'
let readMore = document.getElementById('read-more');

// Selecciona el elemento con el ID 'more-info' y lo almacena en la variable 'moreInfo'
let moreInfo = document.getElementById('more-info');

// Define una función de flecha 'showInfo'
const showInfo = () => {
    // Cambia la propiedad de estilo 'display' del elemento 'moreInfo' a 'block', haciéndolo visible
    moreInfo.style.display = `block`
}

// Añade un manejador de evento 'click' al elemento 'readMore'
// Al hacer clic en este elemento, se ejecutará la función 'showInfo'
readMore.addEventListener('click', showInfo);