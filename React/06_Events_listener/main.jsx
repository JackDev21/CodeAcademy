// Se importa React, necesario para el uso de JSX y la creación de componentes de React.
import React from "react";
// Se importa createRoot desde 'react-dom/client', que se utiliza para renderizar elementos de React en el DOM.
import { createRoot } from "react-dom/client";

// Se obtiene el contenedor del DOM por su id 'app', donde se montará la aplicación de React.
const container = document.getElementById("app");
// Se crea una raíz en el contenedor para el árbol de componentes de React.
const root = createRoot(container);

// Se define la función makeDoggy, que transforma una imagen en una imagen de un cachorro.
function makeDoggy(e) {
	// Esta función se llama al hacer clic en una imagen (<img>).
	// La imagen se cambiará por la de un cachorro.
	e.target.setAttribute(
		"src",
		"https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
	);
	e.target.setAttribute("alt", "doggy");
}

// Se crea una constante 'kitty' que contiene un JSX con una imagen de un gatito.
// Esta imagen tiene un evento 'onClick' asociado que llama a la función makeDoggy cuando se hace clic en ella.
const kitty = (
	<img
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
		alt="kitty"
		onClick={makeDoggy}
	/>
);

// Se renderiza el componente 'kitty' en la raíz de React, lo que resultará en la imagen del gatito
// mostrándose en la página web dentro del elemento con id 'app'.
// Al hacer clic en la imagen, se invocará la función makeDoggy y la imagen del gatito cambiará por la de un cachorro.
root.render(kitty);
