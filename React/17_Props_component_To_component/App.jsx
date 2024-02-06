// Importa la exportación predeterminada (default) de la librería 'react'
import React from "react";
// Importa el componente Player desde el archivo "./Player"
import Player from "./Player";

// Define un componente funcional llamado App
function App() {
	// Retorna un elemento JSX que representa la aplicación
	// Renderiza el componente Player con ciertas props, incluyendo el nombre de la canción y el nombre del artista
	return <Player songName="songName" artist="artist" />;
}

// Exporta el componente App para que pueda ser utilizado en otros archivos
export default App;
