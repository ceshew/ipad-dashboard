import { useEffect, useState } from "react";

// modes: 'auto' | 'light' | 'dark'
export function useTheme() {
	const [mode, setMode] = useState(
		() => localStorage.getItem("themeMode") || "auto",
	);

	const computeAuto = () => {
		const h = new Date().getHours();
		// Light between 7:00–19:59, else dark
		return h >= 7 && h < 20 ? "light" : "dark";
	};

	const effective = mode === "auto" ? computeAuto() : mode;

	useEffect(() => {
		document.documentElement.classList.toggle("dark", effective === "dark");
	}, [effective]);

	const set = (m) => {
		setMode(m);
		localStorage.setItem("themeMode", m);
	};

	return { mode, setMode: set, effective };
}
