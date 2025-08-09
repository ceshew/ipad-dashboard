export const CalendarIcon: React.FC<{
	title?: string;
	className?: string;
	isToday?: boolean;
}> = ({ title = "Calendar", className, isToday = false }) => (
	<svg
		width="14"
		height="14"
		viewBox="0 0 16 16"
		fill="lch(38.893% 1 282.863 / 1)"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label={title}
		className={className}
		style={{ fill: isToday ? "lch(58 73 29)" : "currentColor" }}
	>
		{title ? <title>{title}</title> : null}
		<path d="M11 1C13.2091 1 15 2.79086 15 5V11C15 13.2091 13.2091 15 11 15H5C2.79086 15 1 13.2091 1 11V5C1 2.79086 2.79086 1 5 1H11ZM13.5 6H2.5V11C2.5 12.3807 3.61929 13.5 5 13.5H11C12.3807 13.5 13.5 12.3807 13.5 11V6Z"></path>
	</svg>
);
