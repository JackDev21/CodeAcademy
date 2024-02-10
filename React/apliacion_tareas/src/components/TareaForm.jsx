import React, { useState } from "react";
import "../styles/TareaForm.css";
import { v4 as uuidv4 } from "uuid";

const TareaForm = (props) => {
	const [input, setInput] = useState("");

	const checkInput = (event) => {
		setInput(event.target.value);
	};

	const checkForm = (event) => {
		event.preventDefault();

		const newTarea = {
			id: uuidv4(),
			text: input,
			completed: false,
		};
		props.onSubmit(newTarea);
	};

	return (
		<form className='tarea-form' onSubmit={checkForm}>
			<input
				className='input-tarea'
				type='text'
				placeholder='Escribe tu Tarea'
				name='text'
				onChange={checkInput}
			/>
			<button className='btn-tarea'>Agregar Tarea</button>
		</form>
	);
};

export default TareaForm;
