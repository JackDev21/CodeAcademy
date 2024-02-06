import React from "react";

const Testimonio = () => {
	return (
		<div className="contenedor-testimonio">
			<img
				className="imagen-testimonio"
				alt="Img Emma"
				src={require("../images/Emma-5a662db9bcf55809a1fefb2ea17634bc.png")}
			/>
			<div className="contenedor-texto-testimonio">
				<p className="nombre-testimonio">Emma Bostian en Suecia</p>
				<p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
				<p className="texto-testimonio">
					"Siempre he tenido problemas para aprender JavaScript. He tomado
					muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
					Estudiar JavaScript, así como estructuras de datos y algoritmos en
					freeCodeCamp me dio las habilidades y la confianza que necesitaba para
					conseguir el trabajo de mis sueños como ingeniero de software en
					Spotify."
				</p>
			</div>
		</div>
	);
};

export default Testimonio;
