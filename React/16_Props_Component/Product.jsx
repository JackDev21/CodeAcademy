// Importa la exportación predeterminada (default) de la librería 'react'
import React from "react";

// Define un componente funcional llamado Product que recibe props como argumento
function Product(props) {
	// Retorna un elemento JSX que representa la información de un producto
	return (
		<div>
			{/* Muestra el nombre del producto */}
			<h1>{props.name}</h1>
			{/* Muestra el precio del producto */}
			<h2>{props.price}</h2>
			{/* Muestra la calificación del producto */}
			<h3>{props.rating}</h3>
		</div>
	);
}

// Exporta el componente Product para que pueda ser utilizado en otros archivos
export default Product;
