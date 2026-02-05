import React from 'react';
import Hero from './Hero';
import About from './About';

export default function HeroAboutWrapper() {
  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #204051, #3B6978, #84A9AC, #CAE8D5)',
        color: '#fff',
        overflow: 'hidden',
        paddingBottom: '3rem',
      }}
    >
      <Hero />
      <About />
    </section>
  );
}
