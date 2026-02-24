
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState('Cargando...');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => {
        if (data.status === 'ok') {
          setApiStatus('API OK');
        } else {
          setApiStatus('API NO OK');
        }
      })
      .catch(() => setApiStatus('API NO OK'));
  }, []);

  return (
    <div>
      <Head>
        <title>Frontend Next.js + Nginx</title>
      </Head>
      <main>
        <h1>Bienvenido al Frontend Next.js</h1>
        <p>Servido por Nginx y conectado al backend FastAPI en /api.</p>
        <p><strong>Estado de la API:</strong> {apiStatus}</p>
      </main>
    </div>
  );
}
