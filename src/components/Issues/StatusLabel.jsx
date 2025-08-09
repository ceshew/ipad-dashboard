import {
	StatusBacklog,
	StatusCanceled,
	StatusDone,
	StatusDuplicate,
	StatusInProgress,
	StatusTodo,
} from "../Icons/StatusIcons";

export default function StatusLabel({ status }) {
	const statusLower = status.toLowerCase().replace(" ", "-");
	return (
		<div className="label">
			{statusLower === "backlog" && <StatusBacklog />}
			{statusLower === "todo" && <StatusTodo />}
			{statusLower === "in-progress" && <StatusInProgress />}
			{statusLower === "done" && <StatusDone />}
			{statusLower === "canceled" && <StatusCanceled />}
			{statusLower === "duplicate" && <StatusDuplicate />}
			<span className="label-text">{status}</span>
		</div>
	);
}
