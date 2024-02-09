import React from "react";
import logo from "../img/calculator-cartoon.png";

const Logo = () => {
	return (
		<div className='logo-contenedor'>
			<img src={logo} className='logo' alt='Logo Calculadora' />
		</div>
	);
};

export default Logo;
