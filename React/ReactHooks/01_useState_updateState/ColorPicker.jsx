// Importa la exportación predeterminada (default) y la exportación con nombre `useState` de la librería 'react'
import React, { useState } from "react";

// Define un componente funcional llamado ColorPicker
export default function ColorPicker() {
	// Llama a la función useState y asigna sus valores de retorno a `color` y `setColor`
	const [color, setColor] = useState();

	// Define un objeto con una propiedad backgroundColor que es igual al valor actual de `color`
	const divStyle = { backgroundColor: color };

	// Retorna un elemento JSX que representa el componente ColorPicker
	return (
		<div style={divStyle}>
			<p>The color is {color}</p>
			{/* 
                Cada botón tiene un evento onClick que llama a la función setColor con un color específico como argumento
                Al hacer clic en cada botón, se actualizará el estado de `color` con el color correspondiente
            */}
			<button onClick={() => setColor("Aquamarine")}>Aquamarine</button>
			<button onClick={() => setColor("BlueViolet")}>BlueViolet</button>
			<button onClick={() => setColor("Chartreuse")}>Chartreuse</button>
			<button onClick={() => setColor("CornflowerBlue")}>CornflowerBlue</button>
		</div>
	);
}
