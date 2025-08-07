import CalendarList from "./components/Calendar/CalendarList";
import ClockCard from "./components/ClockCard";
import IssuesList from "./components/Issues/IssuesList";
import "./styles.css";

export default function App() {
	return (
		<div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
			<main className="container">
				<section className="col">
					<ClockCard />
					<IssuesList />
				</section>
				<section className="col">
					<CalendarList />
				</section>
			</main>
		</div>
	);
}
