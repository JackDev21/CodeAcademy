// Hola mundo con React
const h1 = <h1>Hello world</h1>;

// Atributos
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

// JSX Elementos
const myTeam = {
	center: <li>Benzo Walli</li>, // Jugador en la posición central
	powerForward: <li>Rasha Loa</li>, // Ala-pívot
	smallForward: <li>Tayshaun Dasmoto</li>, // Alero
	shootingGuard: <li>Colmar Cumberbatch</li>, // Escolta
	pointGuard: <li>Femi Billon</li>, // Base
};

const myArticle = <article></article>; // Elemento artículo vacío

// JSX Anidados
const myDiv = (
	<div>
		<h1>Hello world</h1>
	</div>
);

const theExample = (
	<a href="https://www.example.com">
		<h1>Click me!</h1>
	</a>
);

// Elementos exteriores
const blog = (
	<div>
		<img src="pics/192940u73.jpg" alt="Trulli" /> {/* Imagen */}
		<h1>Welcome to Dan's Blog!</h1> {/* Encabezado del blog */}
		<article>
			Wow I had the tastiest sandwich today. I <strong>literally</strong> almost
			freaked out.
			{/* Contenido del artículo */}
		</article>
	</div>
);

// Rendering JSX
import React from "react"; // Importar React
import { createRoot } from "react-dom/client"; // Importar método createRoot desde react-dom/client

const container = document.getElementById("app"); // Obtener el contenedor con ID "app"
const root = createRoot(container); // Crear una raíz de React
root.render(<h1>Hello world</h1>); // Renderizar un elemento <h1> dentro del contenedor "app"

// Renderizado con React
