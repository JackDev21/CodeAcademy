// Importa la biblioteca React
import React from "react";
// Importa la función createRoot desde la biblioteca react-dom/client
import { createRoot } from "react-dom/client";

// Obtiene el elemento con el id "app" del DOM
const container = document.getElementById("app");
// Crea una raíz de React en el contenedor especificado
const root = createRoot(container);

// Función que simula el lanzamiento de una moneda, devuelve 'heads' o 'tails' aleatoriamente
function coinToss() {
	// Randomly return either 'heads' or 'tails'.
	return Math.random() < 0.5 ? "heads" : "tails";
}

// Objeto que contiene enlaces a imágenes de un gato y un perro
const pics = {
	kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
	doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
};

// Variable 'img' que contiene un elemento JSX de imagen. Se elige entre la imagen de un gato o un perro según el resultado del lanzamiento de la moneda.
const img = <img src={pics[coinToss() === "heads" ? "kitty" : "doggy"]} />;

// Renderiza la imagen en el contenedor especificado
root.render(img);
