// Importa React para poder utilizarlo en el componente
import React from "react";

// Genera un valor aleatorio, true o false, asignado a la variable fiftyFifty
const fiftyFifty = Math.random() < 0.5;

// Nuevo componente de función comienza aquí:
function TonightsPlan() {
	// Verifica si fiftyFifty es verdadero
	if (fiftyFifty === true) {
		// Retorna un elemento JSX si fiftyFifty es verdadero
		return <h1>Tonight I'm going out WOOO</h1>;
	} else {
		// Retorna un elemento JSX si fiftyFifty es falso
		return <h1>Tonight I'm going to bed WOOO</h1>;
	}
}

// Exporta el componente TonightsPlan para que pueda ser utilizado en otros archivos de React
export default TonightsPlan;
