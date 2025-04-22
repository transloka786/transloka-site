
import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#F5ECFA', color: '#3A2E2E' }}>
      <header style={{ backgroundColor: '#C99EED', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ color: '#E1FF17' }}>Transloka</h1>
        <nav>
          <a href='/' style={{ margin: '0 1rem' }}>Home</a>
          <a href='/predictor' style={{ margin: '0 1rem' }}>Predictor</a>
        </nav>
      </header>
      <main>
        <h2 style={{ fontSize: '2rem', marginTop: '2rem' }}>Reading Through Mutations. Restoring Life.</h2>
        <p>India’s First Suppressor tRNA Therapeutics Platform</p>
        <img src='/trna.png' alt='3D tRNA' style={{ marginTop: '2rem', width: '60%' }} />
      </main>
    </div>
  );
}
