import React from 'react';

const TavernSign = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundImage: 'linear-gradient(#5d4037, #3e2723)',
      color: '#ffd700',
      borderBottom: '5px solid #2d1b15',
      boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
      marginBottom: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', margin: 0, textShadow: '2px 2px 4px #000' }}>
        ⚔️ Roman Kitchen 🛡️
      </h1>
      <p style={{ fontStyle: 'italic', color: '#d7ccc8', fontSize: '1.2rem' }}>
        Fantasy x Cooking — A Restaurant for Adults in Akihabara
      </p>
    </div>
  );
};

export default TavernSign;
