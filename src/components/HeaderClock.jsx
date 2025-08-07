import useNow from "../hooks/useNow";

export default function HeaderClock() {
	const now = useNow(1000);
	const date = now.toLocaleDateString(undefined, {
		weekday: "short",
		month: "short",
		day: "numeric",
	});
	const time = now.toLocaleTimeString(undefined, {
		hour: "2-digit",
		minute: "2-digit",
	});
	return (
		<div className="clock">
			{date} • {time}
		</div>
	);
}
