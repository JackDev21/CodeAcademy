// Importamos React y la función createRoot de la biblioteca react-dom/client.
import React from "react";
import { createRoot } from "react-dom/client";

// Obtenemos el contenedor donde queremos renderizar nuestros elementos.
const container = document.getElementById("app");
const root = createRoot(container);

// Creamos un objeto con estilos para el contenedor de elementos.
const containerStyles = {
	display: "flex",
};

// Creamos un elemento de título utilizando un <h1> dentro de un <div>.
const title = (
	<div>
		<h1>Title</h1>
	</div>
);

// Creamos una lista desordenada con tres elementos de lista.
const myList = (
	<ul>
		<li>Opcion 1</li>
		<li>Opcion 2</li>
		<li>Opcion 3</li>
	</ul>
);

// Creamos un elemento combinado que contiene el título y la lista dentro de un contenedor flex.
const combinedElements = (
	<div style={containerStyles}>
		{title}
		{myList}
	</div>
);

// Renderizamos los elementos combinados en el contenedor en el documento HTML.
root.render(combinedElements);
