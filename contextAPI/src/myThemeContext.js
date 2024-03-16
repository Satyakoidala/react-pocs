import { createContext, useState } from "react";

const LightTheme = {
	primaryBackground: "white",
	primaryColor: "black",
	secondaryBackground: "black",
	secondaryColor: "white"
}

const DarkTheme = {
	primaryBackground: "black",
	primaryColor: "white",
	secondaryBackground: "white",
	secondaryColor: "black"
}

const ThemeContext = createContext();

export const ThemeProvider = ({ children, value }) => {
	const [useLight, ToggleTheme] = useState(true);

	const toggleTheme = () => {
		ToggleTheme(!useLight);
	}

	return (
		<ThemeContext.Provider value={{ useLight, toggleTheme, theme: useLight ? LightTheme: DarkTheme, ...value }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;