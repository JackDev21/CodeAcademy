// Importa la exportación predeterminada (default) y la exportación con nombre `useState` de la librería 'react'
import React, { useState } from "react";
// Importa el componente ItemList desde el archivo "./ItemList"
import ItemList from "./ItemList";
// Importa los datos de los productos de la tienda desde el archivo "./storeItems"
import { produce, pantryItems } from "./storeItems";

// Define un componente funcional llamado GroceryCart
export default function GroceryCart() {
	// Declara el estado actual del carrito de compras y la función para establecer el estado
	const [cart, setCart] = useState([]);

	// Función para agregar un ítem al carrito
	const addItem = (item) => {
		// Actualiza el estado del carrito agregando el nuevo ítem al principio del array
		setCart((prev) => {
			return [item, ...prev];
		});
	};

	// Función para eliminar un ítem del carrito
	const removeItem = (targetIndex) => {
		// Actualiza el estado del carrito filtrando el ítem con el índice dado
		setCart((prev) => {
			return prev.filter((item, index) => index !== targetIndex);
		});
	};

	// Retorna un elemento JSX que representa el componente GroceryCart
	return (
		<div>
			{/* Título del carrito de compras */}
			<h1>Grocery Cart</h1>
			{/* Lista de ítems en el carrito, cada uno con la capacidad de ser eliminado */}
			<ul>
				{cart.map((item, index) => (
					<li onClick={() => removeItem(index)} key={index}>
						{item}
					</li>
				))}
			</ul>
			{/* Encabezado para la sección de productos frescos */}
			<h2>Produce</h2>
			{/* Componente ItemList para mostrar los productos frescos y permitir agregarlos al carrito */}
			<ItemList items={produce} onItemClick={addItem} />
			{/* Encabezado para la sección de productos de despensa */}
			<h2>Pantry Items</h2>
			{/* Componente ItemList para mostrar los productos de despensa y permitir agregarlos al carrito */}
			<ItemList items={pantryItems} onItemClick={addItem} />
		</div>
	);
}
