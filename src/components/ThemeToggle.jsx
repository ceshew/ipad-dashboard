export default function ThemeToggle({ mode, setMode }) {
	const next = () => {
		const order = ["auto", "light", "dark"];
		const i = order.indexOf(mode);
		setMode(order[(i + 1) % order.length]);
	};
	return (
		<button type="button" className="toggle" onClick={next} title="Cycle theme">
			Theme: {mode}
		</button>
	);
}
