import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  stats_boost: string;
  item_type: string;
}

const QuestBoard = () => {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    api.get('/menu/')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")',
      backgroundColor: '#fdf5e6',
      border: '10px solid #5d4037',
      borderRadius: '5px',
      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'
    }}>
      <h2 style={{ textAlign: 'center', borderBottom: '2px solid #5d4037', paddingBottom: '1rem' }}>
        📜 Available Quests (Menu)
      </h2>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {items.map(item => (
          <div key={item.id} style={{
            border: '1px solid #8b4513',
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#8b0000' }}>{item.name}</h3>
              <p style={{ margin: 0 }}>{item.description}</p>
              {item.stats_boost && (
                <small style={{ color: '#2e7d32', fontWeight: 'bold' }}>
                  Effect: {item.stats_boost}
                </small>
              )}
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.price} G</span>
              <br />
              <button style={{
                marginTop: '0.5rem',
                backgroundColor: '#8b0000',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '3px'
              }}>
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestBoard;
