import React, { useState } from "react";

function Contact() {
	const password = "swordfish";
	const [authorized, setAuthorized] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		const enteredPassword = e.target.querySelector(
			'input[type="password"]'
		).value;
		const auth = enteredPassword == password;
		setAuthorized(auth);
	}
	const login = (
		<form onSubmit={handleSubmit} action="#">
			<input type="password" placeholder="password" />
			<input type="submit" />
		</form>
	);

	const contactInfo = (
		<ul>
			<li>client@example.com</li>
			<li>555.555.5555</li>
		</ul>
	);

	return (
		<div id="authorization">
			{authorized ? <h1>Contact</h1> : <h1>Enter The password</h1>}
			{authorized ? contactInfo : login}
		</div>
	);
}

export default Contact;
