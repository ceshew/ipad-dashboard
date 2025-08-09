export async function handler() {
  try {
    const apiKey = process.env.LINEAR_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: 'Missing LINEAR_API_KEY' };
    }

    const query = `
      query {
        issues {
          nodes {
            id
            identifier
            title
            state { name }
            assignee { name }
            url
            dueDate
            team { name }
          }
        }
      }
    `;

    const res = await fetch('https://api.linear.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey
      },
      body: JSON.stringify({ query })
    });

    if (!res.ok) {
      const text = await res.text();
      return { statusCode: res.status, body: text };
    }

    const data = await res.json();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'max-age=60' },
      body: JSON.stringify(data.data.issues.nodes)
    };
  } catch (e) {
    return { statusCode: 500, body: e.message || 'Linear function error' };
  }
}