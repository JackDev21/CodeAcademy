// Se importa React, que es necesario para utilizar JSX y construir componentes de React.
import React from "react";
// Se importa createRoot de 'react-dom/client', que se usa para crear la raíz del árbol de componentes de React.
import { createRoot } from "react-dom/client";

// Se selecciona el elemento del DOM con el id "app", que es donde se montará la aplicación de React.
const container = document.getElementById("app");
// Se crea una nueva raíz de React utilizando el contenedor obtenido antes.
const root = createRoot(container);

// Se declara una variable de JavaScript y se le asigna una cadena de texto.
const theBestString = "This text was accessed through a javascript variable";

// Se utiliza la función render del objeto raíz creado previamente para montar un componente de React en el DOM.
// Se pasa un elemento JSX <h1> que contiene la variable de JavaScript 'theBestString' como hijo.
// Las llaves '{}' dentro del JSX se utilizan para inyectar la variable en el elemento <h1>.
root.render(<h1>{theBestString}</h1>);
