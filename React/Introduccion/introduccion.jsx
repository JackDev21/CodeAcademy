// Hola mundo con React

const h1 = <h1>Hello world</h1>;

// Atributos

const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

//JSX Elementos

const myTeam = {
	center: <li>Benzo Walli</li>,
	powerForward: <li>Rasha Loa</li>,
	smallForward: <li>Tayshaun Dasmoto</li>,
	shootingGuard: <li>Colmar Cumberbatch</li>,
	pointGuard: <li>Femi Billon</li>,
};

const myArticle = <article></article>;

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

// Elementos exteriores. La primera etiqueta de apertura y la etiqueta de cierre final de una expresión JSX deben pertenecer al mismo elemento JSX.
// JSX tiene varios elementos externos, la solución suele ser simple: envuelva la expresión JSX en un elemento <div>.

const blog = (
	<div>
		<img src="pics/192940u73.jpg" alt="Trulli" />
		<h1>Welcome to Dan's Blog!</h1>
		<article>
			Wow I had the tastiest sandwich today. I <strong>literally</strong> almost
			freaked out.
		</article>
	</div>
);

// Rendering

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Hello world</h1>);
