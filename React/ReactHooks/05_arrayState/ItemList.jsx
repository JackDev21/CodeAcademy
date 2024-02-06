// Importa la exportación predeterminada (default) de la librería 'react'
import React from "react";

// Define un componente funcional llamado ItemList que recibe props como argumento
export default function ItemList({ items, onItemClick }) {
	// Maneja el clic en un ítem de la lista
	const handleClick = ({ target }) => {
		// Obtiene el valor del ítem (nombre del producto) del evento
		const item = target.value;
		// Llama a la función onItemClick pasando el nombre del ítem como argumento
		onItemClick(item);
	};

	// Retorna un elemento JSX que representa la lista de ítems
	return (
		<div>
			{/* Mapea a través de cada ítem en el array items */}
			{items.map((item, index) => (
				// Crea un botón para cada ítem, con el valor del ítem y el evento onClick vinculados al manejador de clic
				<button value={item} onClick={handleClick} key={index}>
					{item}
				</button>
			))}
		</div>
	);
}
