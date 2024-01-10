import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<h1>{2 + 3}</h1>); // root.render(<h1>2 + 3</h1>); sin llave aparece como texto con llaves hace la suma.

/* Llaves en JSX

En lugar de sumar 2 y 3, imprimió "2 + 3" como una cadena de texto. ¿Por qué?

Esto sucedió porque la expresión 2 + 3 estaba ubicada entre las etiquetas <h1> y </h1>.

Cualquier código ubicado entre las etiquetas de un elemento JSX se interpretará como JSX, ¡no como JavaScript común! JSX no suma números, sino que los trata como texto, al igual que lo hace HTML.

Necesitas una forma de escribir código que diga: "Aunque esté entre las etiquetas JSX, trátame como JavaScript ordinario y no como JSX".

Para lograrlo, debes envolver el código entre llaves. */
