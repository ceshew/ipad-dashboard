import useNow from '../hooks/useNow';

export default function ClockCard() {
  const now = useNow(1000);
  const date = now.toLocaleDateString(undefined, {
    weekday: 'long', month: 'long', day: 'numeric'
  });
  const time = now.toLocaleTimeString(undefined, {
    hour: '2-digit', minute: '2-digit', second: undefined, hour12: false
  });

  return (
    <div className="card clockCard">
      <div className="clockTime">{time}</div>
      <div className="clockDate">{date}</div>
    </div>
  );
}