import React from "react";

export function Player(props) {
	return (
		<>
			<h1>{props.songName}</h1>
			<h2>{props.artist}</h2>
		</>
	);
}
