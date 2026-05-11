import { useState } from 'react';

export default function Generator() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic })
    });

    const data = await res.json();
    setResult(data.text);
    setLoading(false);
  };

  return (
    <div>
      <input
        placeholder='Sujet...'
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />

      <button onClick={generate} style={{ marginLeft: 10 }}>
        Générer
      </button>

      {loading && <p>Génération...</p>}

      {result && (
        <pre style={{ marginTop: 20, whiteSpace: 'pre-wrap' }}>
          {result}
        </pre>
      )}
    </div>
  );
}