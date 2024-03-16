import React, { useContext } from "react";
import "./styles.css";
import ThemeContext, {ThemeProvider} from "./myThemeContext";

const Test = () => {
	const { theme, useLight: isLight, toggleTheme } = useContext(ThemeContext);

	// console.log(theme, useContext(ThemeContext), ThemeContext._currentValue);

	return (
		<div className="card" style={{backgroundColor: theme.primaryBackground, color: theme.primaryColor}}>
			<h1>Context API Demos</h1>
			<button
				className="theme-button"
				type="button"
				onClick={toggleTheme}
				style={{color: theme.secondaryColor, backgroundColor: theme.secondaryBackground}}
			>
				{ isLight ? 'Dark mode': 'Light mode'}
			</button>
			<p>Click the button and see how theme switches color</p>
		</div>
	);
}

export default function App() {

	const customTheme = {
		primaryBackground: "red",
		primaryColor: "white",
		secondaryBackground: "black",
		secondaryColor: "white"
	}

	return (
			<ThemeProvider>
				<Test />
			</ThemeProvider>
	);
}
