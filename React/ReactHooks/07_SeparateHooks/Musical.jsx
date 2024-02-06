import React, { useState } from "react";

// Versión original del componente Musical
function Musical() {
	// Declara el estado utilizando un único objeto
	const [state, setState] = useState({
		title: "Best Musical Ever",
		actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
		locations: {
			Chicago: { dates: ["1/1", "2/2"], address: "chicago theater" },
			SanFrancisco: { dates: ["5/2"], address: "sf theater" },
		},
	});
}

// Versión refactorizada del componente Musical
function MusicalRefactored() {
	// Declara el estado utilizando múltiples estados individuales para cada propiedad
	const [title, setTitle] = useState("Best Musical Ever");
	const [actors, setActors] = useState([
		"George Wilson",
		"Tim Hughes",
		"Larry Clements",
	]);
	const [locations, setLocations] = useState({
		Chicago: { dates: ["1/1", "2/2"], address: "chicago theater" },
		SanFrancisco: { dates: ["5/2"], address: "sf theater" },
	});
}
