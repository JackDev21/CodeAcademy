import React, { useState, useEffect } from "react";
import { get } from "./mockBackend/fetch"; // Importa la función 'get' del módulo 'fetch' en el directorio 'mockBackend'

export default function Shop() {
	// Estado para almacenar las categorías disponibles en la tienda
	const [categories, setCategories] = useState(null);
	// Estado para almacenar la categoría seleccionada por el usuario
	const [selectedCategory, setSelectedCategory] = useState(null);
	// Estado para almacenar los artículos disponibles en la categoría seleccionada
	const [items, setItems] = useState({});

	// Efecto para obtener las categorías disponibles cuando el componente se monta
	useEffect(() => {
		get("/categories").then((response) => {
			setCategories(response.data);
		});
	}, []);

	// Efecto para obtener los artículos de la categoría seleccionada cuando esta cambia
	useEffect(() => {
		// Verifica si la categoría está seleccionada y si los artículos de esa categoría aún no se han cargado
		if (selectedCategory && !items[selectedCategory]) {
			// Realiza una solicitud al servidor para obtener los artículos de la categoría seleccionada
			get(`/items?category=${selectedCategory}`).then((response) => {
				// Actualiza el estado de los artículos con los datos recibidos del servidor
				setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
			});
		}
	}, [items, selectedCategory]);

	// Si las categorías aún no se han cargado, muestra un mensaje de "Cargando..."
	if (!categories) {
		return <p>Loading..</p>;
	}

	// Retorna un elemento JSX que representa la interfaz de usuario de la tienda
	return (
		<div className="App">
			<h1>Clothes 'n Things</h1>
			{/* Navegación para mostrar las categorías disponibles */}
			<nav>
				{categories.map((category) => (
					<button key={category} onClick={() => setSelectedCategory(category)}>
						{category}
					</button>
				))}
			</nav>
			{/* Título de la categoría seleccionada */}
			<h2>{selectedCategory}</h2>
			{/* Lista de artículos de la categoría seleccionada */}
			<ul>
				{/* Si no se ha seleccionado una categoría o los artículos de la categoría aún no se han cargado, no muestra nada */}
				{!items[selectedCategory]
					? null
					: // Si hay artículos disponibles en la categoría seleccionada, los muestra en una lista
					  items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
			</ul>
		</div>
	);
}
