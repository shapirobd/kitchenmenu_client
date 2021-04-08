import { useState, useEffect } from "react";

/**
 * Determines the height and width of the window
 * @returns object containing width & height as integers
 */
function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

/**
 * Custom React hook that uses getWindowDimensions to set state of
 * windowDimensions upon window resize
 * @returns object containing width & height as integers
 */
export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
