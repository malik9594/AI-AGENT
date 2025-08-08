'use client';

import { useState } from 'react';

export default function HomePage() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.result);
    } catch (error) {
      setResponse('Error sending message.');
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h2>Smart Task Assistant 🤖</h2>
      <textarea
        rows={4}
        cols={50}
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={handleSend}>Send</button>
      <p><strong>Response:</strong> {response}</p>
    </main>
  );
}
