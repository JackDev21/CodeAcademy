// Importamos React, que es la librería principal para construir componentes de React.
import React from "react";
// Importamos createRoot del paquete 'react-dom/client', que se usa para crear una raíz de React.
import { createRoot } from "react-dom/client";

// Obtenemos el elemento del DOM donde queremos montar nuestra aplicación de React.
const container = document.getElementById("app");
// Creamos una raíz de React en el contenedor y esto nos permite tener un punto de entrada para renderizar nuestros componentes de React.
const root = createRoot(container);

// Escribimos el código JSX que queremos renderizar.
// En este caso, es un elemento <h1> que muestra el resultado de la operación matemática 2 + 3.
const math = <h1>2 + 3 = {2 + 3}</h1>;

// Utilizamos el método render de la raíz de React para montar el componente JSX en el DOM.
// Esto resultará en la visualización de "2 + 3 = 5" en la página web, dentro del elemento con id 'app'.
root.render(math);
