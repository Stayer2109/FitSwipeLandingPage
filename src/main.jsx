import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/josefin-sans";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

createRoot(document.getElementById("root")).render(
	<Router>
		<StrictMode>
			<App />
		</StrictMode>
	</Router>
);
