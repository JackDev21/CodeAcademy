// Importa la exportación predeterminada (default) de la librería 'react'
import React from "react";
// Importa el componente Product desde el archivo "./Product"
import Product from "./Product";

// Define un componente funcional llamado App
function App() {
	// Retorna un elemento JSX que representa la aplicación
	// Renderiza el componente Product con ciertas props, incluyendo el nombre, precio y calificación del producto
	return <Product name="Apple Watch" price={399} rating="4.5/5.0" />;
}

// Exporta el componente App para que pueda ser utilizado en otros archivos
export default App;
