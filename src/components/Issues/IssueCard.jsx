export default function IssueCard({ issue }) {
	return (
		<div className="card">
			<div className="row">
				<div className="title">
					{issue.identifier} — {issue.title}
				</div>
				{issue.state?.name && <span className="state">{issue.state.name}</span>}
			</div>
			<div className="small">
				{issue.assignee?.name
					? `Assignee: ${issue.assignee.name}`
					: "Unassigned"}
				{issue.updatedAt
					? ` • Updated ${new Date(issue.updatedAt).toLocaleDateString()}`
					: ""}
			</div>
		</div>
	);
}
