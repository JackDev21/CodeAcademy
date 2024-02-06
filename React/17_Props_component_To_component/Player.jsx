// Importa la exportación predeterminada (default) de la librería 'react'
import React from "react";

// Define un componente funcional llamado Player que recibe props como argumento
export function Player(props) {
	// Retorna un fragmento JSX que representa la información de una canción y su artista
	return (
		<>
			{/* Muestra el nombre de la canción */}
			<h1>{props.songName}</h1>
			{/* Muestra el nombre del artista */}
			<h2>{props.artist}</h2>
		</>
	);
}
