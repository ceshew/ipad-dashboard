import { CalendarIcon } from "../Icons/CalendarIcon";

export default function DateLabel({ date }) {
    const formattedDate = date ? new Date(date).toLocaleDateString() : "Not set";
    // If the date is today --> Today
    // If the date is tomorrow --> Tomorrow
    // else format as: Sep 1
    let displayDate;
    if (date) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const dateObj = new Date(date);
        if (dateObj.toDateString() === today.toDateString()) {
            displayDate = "Today";
        }
        else if (dateObj.toDateString() === tomorrow.toDateString()) {
            displayDate = "Tomorrow";
        }
        else if (dateObj.toDateString() === yesterday.toDateString()) {
            displayDate = "Yesterday";
        }
        else {
            displayDate = dateObj.toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
            });
        }


    }
    return (
        <div className="label">
            <CalendarIcon isToday={displayDate === "Today"} />
            <span className="label-text">{displayDate}</span>
        </div>
    );
}