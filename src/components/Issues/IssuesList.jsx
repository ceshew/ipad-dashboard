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
				setItems(Array.isArray(data) ? data : []);
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
		<>
			<h3 className="sectionTitle">Issues</h3>
			<div className="list">
				{items.map((iss) => (
					<IssueCard key={iss.id} issue={iss} />
				))}
			</div>
		</>
	);
}
