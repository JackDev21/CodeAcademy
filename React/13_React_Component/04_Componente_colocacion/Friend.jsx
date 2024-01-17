// Importa la biblioteca React para poder utilizarla en el componente
import React from "react";

// Array de objetos que contiene información sobre amigos, cada objeto tiene un título y una URL de imagen
const friends = [
	{
		title: "Yummmmmmm",
		src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg",
	},
	{
		title: "Hey Guys! Wait Up!",
		src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg",
	},
	{
		title: "Yikes",
		src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg",
	},
];

// Nuevo componente de función comienza aquí:
const Friend = () => {
	// Selecciona el primer amigo del array
	let friend = friends[0];

	// Retorna un elemento JSX que representa la estructura del componente
	return (
		<div>
			{/* Renderiza un encabezado h1 con el título del amigo */}
			<h1>{friend.title}</h1>

			{/* Renderiza una etiqueta de imagen con la URL de la imagen del amigo */}
			<img src={friend.src} />
		</div>
	);
};

// Exporta el componente Friend para que pueda ser utilizado en otros archivos de React
export default Friend;
