import React from "react";
import "../styles/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ id, text, completed, tareaCompleted, tareaDelete }) => {
	return (
		<div className={completed ? "tarea-container completed" : "tarea-container"}>
			<div className='tarea-text' onClick={() => tareaCompleted(id)}>
				{text}
			</div>
			<div className='tarea-contenedor-icon' onClick={() => tareaDelete(id)}>
				<AiOutlineCloseCircle className='tarea-icon' />
			</div>
		</div>
	);
};

export default Tarea;
