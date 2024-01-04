// Crea una constante 'first' y asigna el primer elemento hijo del 'body' del documento
const first = document.body.children[0];

// Cambia el contenido HTML del primer elemento hijo a 'BROWN BEARS ARE AWESOME!'
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

// Accede al elemento padre de 'first' y cambia su color de fondo a 'beige'
first.parentNode.style.backgroundColor = 'beige';