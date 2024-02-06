// Importa la exportación predeterminada (default) y la exportación con nombre `useState` de la librería 'react'
import React, { useState } from "react";

// Define un componente funcional llamado EditProfile
export default function EditProfile() {
	// Declara el estado actual del perfil y la función para establecer el estado
	const [profile, setProfile] = useState({});

	// Maneja el cambio en los inputs del formulario
	const handleChange = ({ target }) => {
		// Obtiene el nombre y el valor del input del evento
		const { name, value } = target;
		// Actualiza el estado del perfil, preservando las propiedades existentes y actualizando la propiedad correspondiente
		setProfile((prevProfile) => ({
			...prevProfile,
			[name]: value,
		}));
	};

	// Maneja el envío del formulario
	const handleSubmit = (event) => {
		// Previene el comportamiento por defecto de enviar el formulario
		event.preventDefault();
		// Muestra una alerta con los datos del perfil en formato JSON
		alert(JSON.stringify(profile, "", 2));
	};

	// Retorna un elemento JSX que representa el formulario de edición de perfil
	return (
		<form onSubmit={handleSubmit}>
			{/* Input para el nombre */}
			<input
				onChange={handleChange}
				value={profile.firstName || ""}
				name="firstName"
				type="text"
				placeholder="First Name"
			/>
			{/* Input para el apellido */}
			<input
				onChange={handleChange}
				value={profile.lastName || ""}
				type="text"
				name="lastName"
				placeholder="Last Name"
			/>
			{/* Input para la fecha de nacimiento */}
			<input
				onChange={handleChange}
				value={profile.bday || ""}
				type="date"
				name="bday"
			/>
			{/* Input para la contraseña */}
			<input
				onChange={handleChange}
				value={profile.password || ""}
				type="password"
				name="password"
				placeholder="Password"
			/>
			{/* Botón para enviar el formulario */}
			<button type="submit">Submit</button>
		</form>
	);
}
