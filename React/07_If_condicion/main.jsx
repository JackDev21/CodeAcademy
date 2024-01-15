// Se importa React, que se utiliza para crear componentes y utilizar JSX.
import React from "react";
// Se importa createRoot de 'react-dom/client' para la renderización de elementos React.
import { createRoot } from "react-dom/client";

// Se obtiene el contenedor del DOM donde se montará el componente React.
const container = document.getElementById("app");
// Se inicializa la raíz de React en el contenedor.
const root = createRoot(container);

// Se define una función que simula el lanzamiento de una moneda.
function coinToss() {
	// La función devuelve aleatoriamente 'heads' o 'tails'.
	return Math.random() < 0.5 ? "heads" : "tails";
}

// Se crea un objeto 'pics' que contiene URLs de imágenes de un gatito y un cachorro.
const pics = {
	kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
	doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
};

// Se declara la variable 'img'.
let img;
// Se realiza un lanzamiento de moneda y, dependiendo del resultado, 'img' se inicializa con el JSX de la imagen correspondiente.
if (coinToss() === "heads") {
	img = <img src={pics.kitty} alt="Kitty" />;
} else {
	img = <img src={pics.doggy} alt="Doggy" />;
}

// Se renderiza el elemento 'img' en la raíz de React.
root.render(img);
