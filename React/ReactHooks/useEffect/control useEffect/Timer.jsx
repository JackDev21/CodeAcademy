// Importa la exportación predeterminada (default) y la exportación con nombre `useState` y `useEffect` de la librería 'react'
import React, { useState, useEffect } from "react";

// Define un componente funcional llamado Timer
export default function Timer() {
	// Declara el estado actual del tiempo y la función para establecer el estado
	const [time, setTime] = useState(0);
	// Declara el estado actual del nombre y la función para establecer el estado
	const [name, setName] = useState("");

	// Efecto secundario que se ejecuta después del montaje del componente
	useEffect(() => {
		// Establece un intervalo para actualizar el estado del tiempo cada segundo
		const intervalId = setInterval(() => {
			setTime((prev) => prev + 1);
		}, 1000);

		// Retorna una función de limpieza para limpiar el intervalo cuando el componente se desmonta
		return () => {
			clearInterval(intervalId);
		};
	}, []); // El efecto solo se ejecuta una vez después del montaje del componente

	// Función para manejar el cambio en el input del nombre
	const handleChange = ({ target }) => setName(target.value);

	// Retorna un elemento JSX que muestra el tiempo y un input para el nombre
	return (
		<>
			<h1>Time: {time}</h1>
			<input value={name} onChange={handleChange} type="text" />
		</>
	);
}
