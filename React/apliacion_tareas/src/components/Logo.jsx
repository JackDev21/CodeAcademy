import React from "react";
import logo from "../img/logo.png";

const Logo = () => {
	return (
		<div className='logo-container'>
			<img src={logo} className='logo' alt='Logo' />
		</div>
	);
};

export default Logo;
