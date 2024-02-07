import React from "react";
import { createRoot } from "react-dom/client";
import GuineaPigsContainer from "./containers/GuineaPigsContainer"

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<GuineaPigsContainer />);