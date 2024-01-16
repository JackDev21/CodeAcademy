// Importa la biblioteca React y la función createRoot de react-dom/client.
import React from "react";
import { createRoot } from "react-dom/client";

// Obtiene el elemento HTML con el ID 'app' para renderizar dentro de él.
const container = document.getElementById("app");
const root = createRoot(container);

// Un array de nombres de personas.
const people = ["Rowe", "Prevost", "Gare"];

// Utiliza el método map para crear un array de elementos JSX <li> a partir de la lista de personas.
const peopleList = people.map((person, i) => (
	// Expresión JSX que representa un elemento de lista <li> con el nombre de la persona.
	<li key={"person_" + i}>{person}</li>
));

// Renderiza la lista de personas dentro de un elemento <ul>.
// Se utiliza la función root.render para renderizar el JSX en el contenedor especificado.
root.render(<ul>{peopleList}</ul>);
