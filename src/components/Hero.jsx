import React, { useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;

    titleRef.current.style.transform = `translate(${x}px, ${y}px)`;
    subtitleRef.current.style.transform = `translate(${x / 1.5}px, ${y / 1.5}px)`;
  };

  const resetTransform = () => {
    titleRef.current.style.transform = 'translate(0, 0)';
    subtitleRef.current.style.transform = 'translate(0, 0)';
  };

  return (
    <section
      ref={heroRef}
      className="hero is-fullheight hero-mouse-reactive"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      style={{ background: 'transparent' }}
    >
      <div className="hero-body">
        <div className="container has-text-centered ">
          <h1 ref={titleRef} className="title is-1 mouse-title" style={{ marginBottom: '0.5rem' }}>
            Cristiano Saldanha
          </h1>
          <h2 ref={subtitleRef} className="subtitle is-3 mouse-subtitle" style={{ marginTop: '0.5rem' }}>
            Software Engineer | Newcastle University
          </h2>

          {/* Resume Button */}
          <div style={{ marginTop: '2rem' }}>
            <a
              href="/Cristiano_CV_2026.pdf"
              download
              className="glass-card"
              style={{
                display: 'inline-block',
                padding: '0.9rem 1.8rem',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                color: '#fff',
                border: '1.5px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.35)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.25)';
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
