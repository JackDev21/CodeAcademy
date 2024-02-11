import React, { useState, useEffect } from "react";
import TareaForm from "./TareaForm";
import Tarea from "./Tarea";
import "../styles/ListaDeTareas.css";

const ListaDeTareas = () => {
	const [tareas, setTareas] = useState([]);

	// Este bloque de código utiliza el hook useEffect de React para ejecutar una función después de que el componente se monta por primera vez.
	useEffect(() => {
		// Se obtiene el valor almacenado en el localStorage bajo la clave "tareas".
		const storedTareas = localStorage.getItem("tareas");

		// Se verifica si se ha encontrado algún valor en el almacenamiento local.
		if (storedTareas) {
			// Si se encontraron tareas almacenadas, se procede a parsearlas como JSON para convertirlas en un objeto de JavaScript.
			const parsedTareas = JSON.parse(storedTareas);

			// Luego, se establece el estado de las tareas del componente con las tareas obtenidas del almacenamiento local.
			setTareas(parsedTareas);
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
