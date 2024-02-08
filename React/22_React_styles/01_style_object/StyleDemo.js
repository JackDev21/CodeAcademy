// Importa el módulo 'react' desde la biblioteca de React
import React from 'react';

// Crea un objeto 'myStyle' que contiene propiedades de estilo CSS
const myStyle = { background: "lightblue", color: "darkblue" }

// Define el componente 'StyleDemo' como una función de componente de React
function StyleDemo() {
    return (
        // Utiliza la sintaxis de fragmentos de React (<></>) para envolver múltiples elementos sin crear un nodo padre adicional
        <>
            {/* Utiliza el estilo de línea para aplicar estilos directamente en este elemento */}
            <h1 style={{ background: "lightgreen", color: "darkgreen" }}>Style This With Inline Styling</h1>
            {/* Utiliza un objeto de estilo previamente definido para aplicar estilos a este elemento */}
            <h1 style={myStyle}> Style This With Style Object Variable</h1>
        </>
    );
}

// Exporta el componente 'StyleDemo' para que pueda ser utilizado en otros archivos
export default StyleDemo;
