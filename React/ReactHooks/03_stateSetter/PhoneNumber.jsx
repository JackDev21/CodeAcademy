// Importa la exportación predeterminada (default) y la exportación con nombre `useState` de la librería 'react'
import React, { useState } from "react";

// Expresión regular para validar números entre 1 y 10 dígitos de longitud
const validPhoneNumber = /^\d{1,10}$/;

// Define un componente funcional llamado PhoneNumber
export default function PhoneNumber() {
	// Declara el estado actual del número de teléfono y la función para establecer el estado
	const [phone, setPhone] = useState("");

	// Maneja el cambio en el input del número de teléfono
	const handleChange = ({ target }) => {
		// Obtiene el nuevo valor del número de teléfono del evento
		const newPhone = target.value;
		// Verifica si el nuevo valor del número de teléfono es válido utilizando la expresión regular
		const isValid = validPhoneNumber.test(newPhone);
		// Si el nuevo valor es válido, actualiza el estado del número de teléfono
		if (isValid) {
			setPhone(newPhone);
		}
		// Si el nuevo valor no es válido, ignora el evento y no actualiza el estado
	};

	// Retorna un elemento JSX que representa el componente PhoneNumber
	return (
		<div className="phone">
			{/* Etiqueta para el input del número de teléfono */}
			<label htmlFor="phone-input">Phone: </label>
			{/* Input para ingresar el número de teléfono, con el valor y el evento onChange vinculados al estado y al manejador de cambio respectivamente */}
			<input value={phone} onChange={handleChange} id="phone-input" />
		</div>
	);
}
