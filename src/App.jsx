import { useEffect, useState } from 'react';

function App() {
  const [linear, setLinear] = useState([]);
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setLinear([{ id: 1, title: 'Mock Issue', status: 'Open' }]);
    setCalendar([{ id: 'a1', title: 'Meeting', time: '10:00 AM' }]);
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <h1>Dashboard</h1>
      <section>
        <h2>Linear Issues</h2>
        <ul>{linear.map(i => <li key={i.id}>{i.title} — {i.status}</li>)}</ul>
      </section>
      <section>
        <h2>Calendar Events</h2>
        <ul>{calendar.map(e => <li key={e.id}>{e.time}: {e.title}</li>)}</ul>
      </section>
    </div>
  );
}

export default App;