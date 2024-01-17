// Importa la librería React
import React from "react";

// Define el componente 'quote'
const quote = () => {
	return (
		// Bloque de citas que incluye un párrafo y una cita
		<blockquote>
			{/* Párrafo de la cita */}
			<p>What is important now is to recover our senses.</p>
			{/* Cita que incluye un enlace a la página de Wikipedia de Susan Sontag */}
			<cite>
				{/* Enlace externo que se abre en una nueva pestaña */}
				<a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
					Susan Sontag
				</a>
			</cite>
		</blockquote>
	);
};

// Exporta el componente 'quote' para que pueda ser utilizado en otros archivos
export default quote;
