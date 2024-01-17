// Importa React para poder utilizarlo en el componente
import React from "react";

// Define un componente de función llamado SubmitButton
function SubmitButton() {
	// Define una función interna llamada handleClick que muestra una alerta
	function handleClick() {
		alert("Submission Successful.");
	}

	// Retorna un elemento JSX que es un botón con un manejador de clic asociado
	return <button onClick={handleClick}>Submit</button>;
}

// Exporta el componente SubmitButton para que pueda ser utilizado en otros archivos de React
export default SubmitButton;
