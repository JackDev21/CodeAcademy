import React from "react";
import "../styles/Button.css";

const Button = ({ texto, itsClickButton, setItsClickButton }) => {
	return (
		<div>
			<button
				className={itsClickButton ? "clickButton" : "restartButton"}
				onClick={setItsClickButton}
			>
				{texto}
			</button>
		</div>
	);
};

export default Button;
