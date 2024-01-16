// Importa la biblioteca React y la función createRoot de react-dom/client.
import React from "react";
import { createRoot } from "react-dom/client";

// Obtiene el elemento HTML con el ID 'app' para renderizar dentro de él.
const container = document.getElementById("app");
const root = createRoot(container);

// La variable judgmental será verdadera la mitad del tiempo.
const judgmental = Math.random() < 0.5;

// Creando un elemento JSX que representa una lista de comidas favoritas.
const favoriteFoods = (
	<div>
		{/* Encabezado principal */}
		<h1>Mis Comidas Favoritas</h1>
		{/* Lista no ordenada de comidas favoritas */}
		<ul>
			<li>Sushi Burrito</li>
			<li>Pastel de Ruibarbo</li>
			{/* Agregando un elemento JSX condicional basado en el valor de judgmental. */}
			{!judgmental && <li>Nacho Cheez directo del frasco</li>}
			<li>Toronja Asada</li>
		</ul>
	</div>
);

// Renderizando el elemento JSX en el contenedor especificado.
root.render(favoriteFoods);
