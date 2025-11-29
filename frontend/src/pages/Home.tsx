import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Welcome to Roman Kitchen</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
        Located in Akihabara, we offer a unique "Fantasy x Cooking" experience.
        Our specialty is <strong>Beef Tendon Curry</strong>, simmered to perfection.
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
        Enjoy a moment of adventure in your daily life.
      </p>

      <Link to="/menu" style={{
        textDecoration: 'none',
        backgroundColor: '#8b0000',
        color: '#ffd700',
        padding: '1rem 2rem',
        fontSize: '1.5rem',
        borderRadius: '5px',
        border: '2px solid #ffd700',
        boxShadow: '0 4px 0 #5d4037',
        fontFamily: 'Cinzel, serif'
      }}>
        View the Menu
      </Link>
    </div>
  );
};

export default Home;
