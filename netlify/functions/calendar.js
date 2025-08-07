import * as ical from 'node-ical';

export async function handler() {
  try {
    const icsUrl = process.env.GCAL_ICS_URL; // private ICS feed URL from Google Calendar
    if (!icsUrl) {
      return { statusCode: 500, body: 'Missing GCAL_ICS_URL' };
    }

    // Fetch and parse ICS
    const resp = await fetch(icsUrl, { headers: { 'Cache-Control': 'no-cache' } });
    if (!resp.ok) return { statusCode: resp.status, body: await resp.text() };
    const icsText = await resp.text();
    const events = ical.parseICS(icsText);

    // Normalize upcoming events
    const now = new Date();
    const upcoming = Object.values(events)
      .filter(ev => ev.type === 'VEVENT')
      .map(ev => ({
        id: ev.uid,
        title: ev.summary || '(no title)',
        start: ev.start,
        end: ev.end,
        location: ev.location || '',
        url: ev.url || ''
      }))
      .filter(ev => new Date(ev.end || ev.start) >= now)
      .sort((a, b) => new Date(a.start) - new Date(b.start))
      .slice(0, 15);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'max-age=60' },
      body: JSON.stringify(upcoming)
    };
  } catch (e) {
    return { statusCode: 500, body: e.message || 'Calendar function error' };
  }
}