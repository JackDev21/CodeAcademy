// Importa la exportación predeterminada (default) y la exportación con nombre `useState` y `useEffect` de la librería 'react'
import React, { useState, useEffect } from "react";

// Define un componente funcional llamado Counter
export default function Counter() {
	// Declara el estado actual del contador y la función para establecer el estado
	const [count, setCount] = useState(0);

	// Efecto secundario que se ejecuta después de cada renderizado del componente
	useEffect(() => {
		// Muestra una alerta con el valor actual del contador
		alert(`Count: ${count}`);
	});

	// Función para manejar el clic en el botón
	const handleClick = () => {
		// Incrementa el contador en 1
		setCount((prevCount) => prevCount + 1);
	};

	// Retorna un elemento JSX que representa el contador
	return (
		<div>
			{/* Muestra el número de clics */}
			<p>You clicked {count} times</p>
			{/* Botón para incrementar el contador */}
			<button onClick={handleClick}>Click me</button>
		</div>
	);
}
