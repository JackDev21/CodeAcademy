import React, { useState } from "react";
import TareaForm from "./TareaForm";
import Tarea from "./Tarea";
import "../styles/ListaDeTareas.css";

const ListaDeTareas = () => {
	const [tareas, setTareas] = useState([]);

	const addTarea = (tarea) => {
		console.log(tarea);
		if (tarea.text.trim()) {
			tarea.text = tarea.text.trim();

			const tareaUpdate = [tarea, ...tareas];
			setTareas(tareaUpdate);
		}
	};

	const tareaDelete = (id) => {
		const tareasUpdate = tareas.filter((tarea) => tarea.id !== id);
		setTareas(tareasUpdate);
	};

	const tareaCompleted = (id) => {
		const tareaUPdate = tareas.map((tarea) => {
			if (tarea.id === id) {
				tarea.completed = !tarea.completed;
			}
			return tarea;
		});
		setTareas(tareaUPdate);
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
