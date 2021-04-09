import React, { useEffect } from "react";
import NavBar from "./navigation/NavBar";
import Routes from "./Routes";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	typography: {
		fontFamily: ["Ubuntu"].join(","),
	},
});

function App() {
	// const connectToServer = () => {
	// 	fetch("/");
	// };

	// useEffect(() => {
	// 	connectToServer();
	// }, []);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<NavBar />
				<Routes />
			</div>
		</ThemeProvider>
	);
}

export default App;
