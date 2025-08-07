export default function EventCard({ ev }) {
	const start = new Date(ev.start);
	const end = ev.end ? new Date(ev.end) : null;
	const time = start.toLocaleTimeString(undefined, {
		hour: "2-digit",
		minute: "2-digit",
        hour12: false,
	});
	const endTime = end
		? end.toLocaleTimeString(undefined, {
				hour: "2-digit",
				minute: "2-digit",
				hour12: false,
			})
		: null;

	return (
		<div className="card">
			<div className="row">
				<div className="title">{ev.title}</div>
				<span className="badge">
					{start.toLocaleDateString(undefined, {
						weekday: "short",
						month: "short",
						day: "numeric",
					})}
				</span>
			</div>
			<div className="small">
				{time}
				{endTime ? `–${endTime}` : ""} {ev.location ? `• ${ev.location}` : ""}
			</div>
		</div>
	);
}
