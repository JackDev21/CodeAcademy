// Importa la exportación predeterminada (default) y la exportación con nombre `useState` y `useEffect` de la librería 'react'
import React, { useState, useEffect } from "react";

// Define un componente funcional llamado Counter
export default function Counter() {
	// Declara el estado actual del contador de clics y la función para establecer el estado
	const [clickCount, setClickCount] = useState(0);

	// Función para incrementar el contador de clics
	const increment = () => {
		setClickCount((prevClickCount) => prevClickCount + 1);
	};

	// Efecto secundario que se ejecuta después de cada renderizado del componente
	useEffect(() => {
		// Agrega un event listener para el evento "mousedown" al documento
		document.addEventListener("mousedown", increment);
		// Retorna una función de limpieza para remover el event listener cuando el componente se desmonta
		return () => {
			document.removeEventListener("mousedown", increment);
		};
	});

	// Retorna un elemento JSX que muestra el número de clics en el documento
	return <h1>Document Clicks: {clickCount}</h1>;
}
