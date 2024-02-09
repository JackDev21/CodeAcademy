import React from "react";
import "../styles/ClearButton.css";

const ClearButton = (props) => {
	return (
		<div className="clear-button" onClick={() => props.clearInput(props.children)}>
			{props.children}
		</div>
	);
};

export default ClearButton;
