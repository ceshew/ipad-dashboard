import { useEffect, useState } from 'react';

function App() {
  const [linear, setLinear] = useState([]);
  const [events, setEvents] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const [l, c] = await Promise.all([
          fetch('/.netlify/functions/linear').then(r => r.json()),
          fetch('/.netlify/functions/calendar').then(r => r.json())
        ]);
        setLinear(l);
        setEvents(c);
      } catch (e) {
        setErr(String(e));
      }
    })();

    // Auto-refresh every 5 minutes (old iPad friendly)
    const id = setInterval(() => {
      fetch('/.netlify/functions/linear').then(r => r.json()).then(setLinear).catch(()=>{});
      fetch('/.netlify/functions/calendar').then(r => r.json()).then(setEvents).catch(()=>{});
    }, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', padding: 12, lineHeight: 1.4 }}>
      <h1 style={{ marginBottom: 8 }}>Dashboard</h1>
      {err && <div style={{ color: 'crimson' }}>{err}</div>}

      <section style={{ marginBottom: 16 }}>
        <h2 style={{ marginBottom: 6 }}>Linear</h2>
        <ul>
          {linear.map(i => (
            <li key={i.id}>
              <strong>{i.identifier}</strong> — {i.title} ({i.state?.name}) {i.assignee?.name ? `• ${i.assignee.name}` : ''}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 style={{ marginBottom: 6 }}>Calendar (next 15)</h2>
        <ul>
          {events.map(e => (
            <li key={e.id}>
              {new Date(e.start).toLocaleString()} — {e.title}{e.location ? ` @ ${e.location}` : ''}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;