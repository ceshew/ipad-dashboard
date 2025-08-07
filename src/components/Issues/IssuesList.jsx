import { useEffect, useState } from "react";
import IssueCard from "./IssueCard";

export default function IssuesList() {
	const [items, setItems] = useState(null);
	const [err, setErr] = useState("");

	useEffect(() => {
		async function load() {
			try {
				const res = await fetch("/.netlify/functions/linear");
				const data = await res.json();
				const raw = Array.isArray(data) ? data : [];

				// drop issues that are done (by state or completion flag)
				const openOnly = raw.filter(
					(i) => !(i.state?.name?.toLowerCase() === "done" || i.completedAt),
				);

				setItems(openOnly);
			} catch (e) {
				setErr(String(e));
			}
		}

		load();
		const id = setInterval(load, 5 * 60 * 1000);
		return () => clearInterval(id);
	}, []);

	if (err)
		return (
			<div className="small" style={{ color: "crimson" }}>
				Linear error: {err}
			</div>
		);
	if (!items) return <div className="small">Loading issues…</div>;
	if (!items.length) return <div className="small">No issues.</div>;

	return (
		<div className="sectionCard">
			<h3 className="sectionTitle">Issues</h3>
			<div className="list">
				{items.map((iss) => (
					<IssueCard key={iss.id} issue={iss} />
				))}
			</div>
		</div>
	);
}
