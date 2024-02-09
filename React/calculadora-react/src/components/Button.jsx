import React from "react";
import "../styles/Button.css";

const Button = (props) => {
	const esOperador = (valor) => {
		return isNaN(valor) && valor !== "." && valor !== "=";
	};

	return (
		<button
			className={`button-contenedor ${
				esOperador(props.children) ? "operador" : ""
			}`.trimEnd()}
			onClick={() => props.clickButton(props.children)}
		>
			{props.children}
		</button>
	);
};

export default Button;
