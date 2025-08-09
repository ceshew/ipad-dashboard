import DateLabel from "./DateLabel";
import StatusLabel from "./StatusLabel";

export default function IssueCard({ issue }) {
	const { title, team, state, assignee, dueDate } = issue;
	const teamName = team?.name || null;
	const stateName = state?.name || null;
	const formattedAssignee = assignee?.name
		? `${assignee.name}`
		: "Unassigned";

	return (
		<div className="card">
			<div className="row" style={{marginBottom: "5px"}}>
				<div className="title">
					{teamName && (
						<span
							className={`tag ${teamName.toLowerCase()}`}
							style={{ marginRight: "5px" }}
						>
							{teamName}
						</span>
					)}
					{title}
				</div>
				{stateName && <StatusLabel status={stateName} />}
			</div>
			<div className="small">
				<div className="row">
					{formattedAssignee}
					{dueDate && <DateLabel date={dueDate} />}
				</div>
			</div>
		</div>
	);
}
