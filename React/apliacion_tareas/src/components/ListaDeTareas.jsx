import React, { useState, useEffect } from "react";
import TareaForm from "./TareaForm";
import Tarea from "./Tarea";
import "../styles/ListaDeTareas.css";

const ListaDeTareas = () => {
	const [tareas, setTareas] = useState([]);

	// Al cargar la página, recuperamos las tareas almacenadas en el almacenamiento local
	useEffect(() => {
		const storedTareas = localStorage.getItem("tareas");
		if (storedTareas) {
			try {
				const parsedTareas = JSON.parse(storedTareas);
				setTareas(parsedTareas);
			} catch (error) {
				console.error("Error parsing stored tareas:", error);
				// Si hay un error al analizar las tareas, podrías manejarlo aquí
				// Por ejemplo, podrías inicializar el estado con un valor predeterminado
				setTareas([]);
			}
		}
	}, []);

	const addTarea = (tarea) => {
		if (tarea.text.trim()) {
			tarea.text = tarea.text.trim();
			const tareaUpdate = [tarea, ...tareas];
			setTareas(tareaUpdate);
			// Al agregar una nueva tarea, actualizamos las tareas almacenadas en el almacenamiento local
			localStorage.setItem("tareas", JSON.stringify(tareaUpdate));
		}
	};

	const tareaDelete = (id) => {
		const tareasUpdate = tareas.filter((tarea) => tarea.id !== id);
		setTareas(tareasUpdate);
		// Después de eliminar una tarea, actualizamos las tareas almacenadas en el almacenamiento local
		localStorage.setItem("tareas", JSON.stringify(tareasUpdate));
	};

	const tareaCompleted = (id) => {
		const tareaUpdate = tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.completed = !tarea.completed;
			}
			return tarea;
		});
		setTareas(tareaUpdate);
		localStorage.setItem("tareas", JSON.stringify(tareaUpdate));
	};

	return (
		<>
			<TareaForm onSubmit={addTarea} />
			<div className='tarea-list-container'>
				{tareas.map((tarea) => (
					<Tarea
						key={tarea.id}
						id={tarea.id}
						text={tarea.text}
						completed={tarea.completed}
						tareaDelete={tareaDelete}
						tareaCompleted={tareaCompleted}
					/>
				))}
			</div>
		</>
	);
};
export default ListaDeTareas;
