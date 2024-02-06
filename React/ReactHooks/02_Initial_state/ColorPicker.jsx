// Importa la exportación predeterminada (default) y la exportación con nombre `useState` de la librería 'react'
import React, { useState } from "react";

// Define un array de nombres de colores
const colorNames = [
	"Aquamarine",
	"BlueViolet",
	"Chartreuse",
	"CornflowerBlue",
	"Thistle",
	"SpringGreen",
	"SaddleBrown",
	"PapayaWhip",
	"MistyRose",
];

// Define un componente funcional llamado ColorPicker
export default function ColorPicker() {
	// Define una variable de estado llamada `color` y una función para actualizarla llamada `setColor`
	// Inicializa `color` con el valor "Tomato"
	const [color, setColor] = useState("Tomato");

	// Define un objeto con una propiedad backgroundColor que es igual al valor actual de `color`
	const divStyle = { backgroundColor: color };

	// Retorna un elemento JSX que representa el componente ColorPicker
	return (
		<div style={divStyle}>
			{/* Muestra el color seleccionado */}
			<p>Selected color: {color}</p>
			{/* 
                Mapea a través de cada nombre de color en el array colorNames
                Para cada nombre de color, crea un botón que, al hacer clic, llama a la función setColor con el nombre del color como argumento
                La clave (key) de cada botón se establece en el nombre del color para garantizar la identidad única de cada elemento en la lista
            */}
			{colorNames.map((colorName) => (
				<button onClick={() => setColor(colorName)} key={colorName}>
					{colorName}
				</button>
			))}
		</div>
	);
}
