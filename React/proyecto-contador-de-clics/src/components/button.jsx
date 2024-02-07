import React from "react";

const button = ({ texto, itsClickButton, setItsClickButton }) => {
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

export default button;
