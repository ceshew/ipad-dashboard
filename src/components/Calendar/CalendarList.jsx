import { useEffect, useState } from "react";
import EventCard from "./EventCard";

export default function CalendarList() {
	const [events, setEvents] = useState(null);
	const [err, setErr] = useState("");

	useEffect(() => {
		async function load() {
			try {
				const res = await fetch("/.netlify/functions/calendar");
				const data = await res.json();
				setEvents(Array.isArray(data) ? data : []);
			} catch (e) {
				setErr(String(e));
			}
		}
		load();
		const id = setInterval(load, 30 * 60 * 1000);
		return () => clearInterval(id);
	}, []);

	if (err)
		return (
			<div className="small" style={{ color: "crimson" }}>
				Calendar error: {err}
			</div>
		);
	if (!events) return <div className="small">Loading events…</div>;
	if (!events.length) return <div className="small">No upcoming events.</div>;

	return (
		<div className="sectionCard">
			<h3 className="sectionTitle">Upcoming</h3>
			<div className="list">
				{events.map((ev) => (
					<EventCard key={ev.id} ev={ev} />
				))}
			</div>
		</div>
	);
}
