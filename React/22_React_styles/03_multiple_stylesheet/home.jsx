import React from "react";
import styles from "./styles/Home.module.css";

import AttentionGrabber from "./AttentionGrabber";

function Home() {
	return (
		<div className={styles.div}>
			<AttentionGrabber />
			<footer>Codey Cademy: Full-Stack Developer</footer>
		</div>
	);
}

export default Home;
