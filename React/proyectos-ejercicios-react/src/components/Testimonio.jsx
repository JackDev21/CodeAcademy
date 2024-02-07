import React from "react";
import "../stylesheets/Testimonio.css";

const Testimonio = (props) => {
	return (
		<div className="contenedor-testimonio">
			<img
				className="imagen-testimonio"
				alt="Img Emma"
				src={require(`../images/testimonio-${props.imagen}.png`)}
			/>
			<div className="contenedor-texto-testimonio">
				<p className="nombre-testimonio">
					{props.nombre} Bostian en {props.pais}
				</p>
				<p className="cargo-testimonio">
					{props.cargo} en {props.empresa}
				</p>
				<p className="texto-testimonio">{props.testimonio}</p>
			</div>
		</div>
	);
};

export default Testimonio;
