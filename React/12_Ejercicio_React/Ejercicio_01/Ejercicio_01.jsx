// Importa el objeto 'animals' desde el archivo 'animals.js'
import { animals } from "./animals";
// Importa React y la función 'createRoot' de 'react-dom/client'
import React from "react";
import { createRoot } from "react-dom/client";

// Obtiene el elemento HTML con el id "app" donde se renderizará la aplicación
const container = document.getElementById("app");
// Crea un nodo raíz para la aplicación usando 'createRoot' y el contenedor especificado
const root = createRoot(container);

// Define el título principal de la aplicación
const title = "Click an animal for a SUPER fun fact!";
// Indica si se debe mostrar o no el fondo (background)
const showBackground = true;

// Define el componente de fondo (background) con una imagen del océano
const background = (
	<img className="background" alt="ocean" src="/images/ocean.jpg" />
);

// Función para mostrar un hecho divertido al hacer clic en una imagen de animal
const displayFact = (e) => {
	// Obtiene el nombre del animal desde el atributo 'alt' de la imagen
	const animal = e.target.alt;
	// Obtiene un índice aleatorio para seleccionar un hecho del array de hechos del animal
	const index = Math.floor(Math.random() * animals[animal].facts.length);
	// Obtiene el hecho aleatorio
	const funFact = animals[animal].facts[index];
	// Obtiene el elemento con el id "fact" y establece su contenido como el hecho aleatorio
	const p = document.getElementById("fact");
	p.innerHTML = funFact;
};

// Array para almacenar componentes de imágenes de animales
const images = [];
// Itera sobre cada animal en el objeto 'animals'
for (const animal in animals) {
	// Crea un componente de imagen de animal con eventos de clic y atributos correspondientes
	const image = (
		<img
			onClick={displayFact}
			key={animal}
			className="animal"
			alt={animal}
			src={animals[animal].image}
			aria-label={animal}
			role="button"
		/>
	);
	// Agrega el componente de imagen al array
	images.push(image);
}

// Define el componente principal que renderizará la aplicación
const animalFacts = (
	<div>
		{/* Título principal de la aplicación */}
		<h1>{title}</h1>
		{/* Condición para mostrar el fondo (background) */}
		{showBackground && background}
		{/* Párrafo para mostrar el hecho divertido */}
		<p id="fact"></p>
		{/* Contenedor de imágenes de animales */}
		<div className="animals">{images}</div>
	</div>
);

// Renderiza el componente principal en el nodo raíz de la aplicación
root.render(animalFacts);
