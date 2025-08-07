import useNow from "../hooks/useNow";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

export default function ClockCard() {
	const now = useNow(1000);
	const { mode, setMode } = useTheme();

	const date = now.toLocaleDateString(undefined, {
		weekday: "long",
		month: "long",
		day: "numeric",
	});
	const time = now.toLocaleTimeString(undefined, {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});

	return (
		<div className="card clockCard">
			<div className="toggleTopRight">
				<ThemeToggle mode={mode} setMode={setMode} />
			</div>

			<div className="clockTime">{time}</div>
			<div className="clockDate">{date}</div>
		</div>
	);
}
