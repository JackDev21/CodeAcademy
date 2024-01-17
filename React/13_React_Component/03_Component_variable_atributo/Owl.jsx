// Importa la biblioteca React para poder utilizarla en el componente
import React from "react";

// Objeto que contiene información sobre un búho, como el título y la URL de la imagen
const owl = {
	title: "Excellent Owl",
	src: "https://content.codecademy.com/courses/React/react_photo-owl.jpg",
};

// Define un componente de función llamado Owl
const Owl = () => {
	// Retorna un elemento JSX que representa la estructura del componente
	return (
		<div>
			{/* Renderiza un encabezado h1 con el título del búho */}
			<h1>{owl.title}</h1>

			{/* Renderiza una imagen con la URL y el título del búho como atributos */}
			<img src={owl.src} alt={owl.title} />
		</div>
	);
};

// Exporta el componente Owl para que pueda ser utilizado en otros archivos
export default Owl;
