import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

export default function App() {
	const isFirstRender = useRef(true);
	const [count, setCount] = useState(0);

	// useEffect works on

	// executes twice with on initial rendering - main - (cleanup + main)
	// and executes everytime the depedency has updated!
	useEffect(() => {
		if (isFirstRender.current) {
			console.log("First render");
			isFirstRender.current = false;
		}
		console.log("component rendered");
		console.log("current value", count);
		return () => {
			console.log("");
			console.log("clean callback executed");
			console.log("previous value", count);
		};
	}, [count]);

	// executes twice with on initial rendering - main - (cleanup + main)
	useEffect(() => {
		if (isFirstRender.current) {
			// useless codeblock because of ref check, ref updates immediately
			console.log("First render - 2nd useEffect");
			isFirstRender.current = false;
		}

		console.log("component rendered - 2nd useEffect");

		return () => {
			console.log("");
			console.log("Cleanup callback executed - 2nd useEffect");
		};
	}, []);

	// executes twice with on initial rendering - main - (cleanup + main)
	// and renders every other time.
	useEffect(() => {
		console.log("component rendered - 3rd useEffect");

		return () => {
			console.log("");
			console.log("Cleanup callback executed - 3rd useEffect");
		};
	});

	return (
		<div>
			<h1>useEffect Demos</h1>
			<button
				type="button"
				onClick={() => {
					setCount(count + 1);
				}}
			>
				click me
			</button>
			<p>{count}</p>
		</div>
	);
}
