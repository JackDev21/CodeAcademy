// Importa la exportación predeterminada (default) y la exportación con nombre `useState` de la librería 'react'
import React, { useState } from "react";

// Define un componente funcional llamado QuizNavBar que recibe props como argumento
export default function QuizNavBar({ questions }) {
	// Declara el estado actual del índice de la pregunta y la función para establecer el estado
	const [questionIndex, setQuestionIndex] = useState(0);

	// Define los manejadores de eventos para ir hacia atrás y avanzar hacia la siguiente pregunta
	const goBack = () =>
		setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
	const goToNext = () =>
		setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);

	// Determina si está en la primera pregunta o no
	const onFirstQuestion = questionIndex === 0;

	// Determina si está en la última pregunta o no
	const onLastQuestion = questionIndex === questions.length - 1;

	// Retorna un elemento JSX que representa la barra de navegación del cuestionario
	return (
		<nav>
			{/* Muestra el número de la pregunta actual */}
			<span>Question #{questionIndex + 1}</span>
			<div>
				{/* Botón para retroceder a la pregunta anterior, deshabilitado si está en la primera pregunta */}
				<button onClick={goBack} disabled={onFirstQuestion}>
					Go Back
				</button>
				{/* Botón para avanzar a la siguiente pregunta, deshabilitado si está en la última pregunta */}
				<button onClick={goToNext} disabled={onLastQuestion}>
					Next Question
				</button>
			</div>
		</nav>
	);
}
