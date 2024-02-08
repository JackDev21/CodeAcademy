// Importa el módulo 'react' desde la biblioteca de React
import React from 'react';

// Define un objeto 'myStyle' que contiene propiedades de estilo CSS
const myStyle = {
    background: 'lightblue',
    color: 'darkblue',
    marginTop: 100, // Agrega un margen superior de 100px no hace falta definir los px
    fontSize: 50,
};

// Define el componente 'StyleDemo' como una función de componente de React
function StyleDemo() {
    // Devuelve un elemento de botón con estilos aplicados usando el objeto 'myStyle'
    return <button style={myStyle}>button</button>;
}

// Exporta el componente 'StyleDemo' para que pueda ser utilizado en otros archivos
export default StyleDemo;
