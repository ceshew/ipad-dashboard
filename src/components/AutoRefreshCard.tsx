import { useEffect, useState } from "react";

export const AutoRefreshCard = () => {
	const [refreshCount, setRefreshCount] = useState(0);
	const [lastUpdated, setLastUpdated] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setRefreshCount((prev) => prev + 1);
			setLastUpdated(new Date());
		}, 10000); // every 10 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div style={{
			background: "#f5f5f5",
			padding: "1rem",
			borderRadius: "0.5rem",
			textAlign: "center"
		}}>
			<h2>🔄 Auto Refresh Demo</h2>
			<p>Refreshed <strong>{refreshCount}</strong> times</p>
			<p>Last updated: {lastUpdated.toLocaleTimeString()}</p>
		</div>
	);
};