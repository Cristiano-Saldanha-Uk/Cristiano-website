import React, { useState } from 'react';

const certifications = [
  {
    name: 'Enterprise Design Thinking Practitioner (IBM)',
    url: 'https://www.credly.com/badges/c51bc683-e970-4dcf-a61b-62169ae2adbf'
  },
  {
    name: 'Artificial Intelligence V2 (IBM)',
    url: 'https://www.credly.com/badges/c9669ae6-c044-46c3-a3b0-36581b2dd293'
  },
  {
    name: 'Watson Machine Learning (IBM)',
    url: 'https://www.credly.com/badges/5aedbe21-6cff-4dff-a145-1a78f7fe20e6'
  },
  {
    name: 'Detect Fraud Using Visual Recognition (IBM)',
    url: 'https://www.credly.com/badges/8a8490a1-4be5-4ba6-9d4b-8714b2c32f65'
  },
  {
    name: 'Blockchain Intro (IBM)',
    url: 'https://www.credly.com/badges/699ecef7-2d50-430c-a699-230175c0aa32'
  },
  {
    name: 'Learn the Fundamentals of Data Science on the IBM Cloud (IBM)',
    url: 'https://www.credly.com/badges/b7dd035c-1738-435d-bd92-d291cb3c2732'
  }
];

export default function Certification() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="certifications"
      className="section"
      style={{ background: 'linear-gradient(to left, #204051, #3B6978, #84A9AC)' }}
    >
      <div className="container">
        <h2 className="title is-3 has-text-centered" style={{ color: '#fff' }}>
          Certifications
        </h2>

        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            color: '#fff',
            cursor: 'pointer',
            fontSize: '2rem',
            display: 'block',
            textAlign: 'center',
            marginBottom: '1rem',
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = isOpen ? 'rotate(180deg) scale(1.2)' : 'scale(1.2)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = isOpen ? 'rotate(180deg) scale(1.1)' : 'scale(1)';
          }}
        >
          <i className="fas fa-chevron-down"></i>
        </div>

        <div
          className="columns is-multiline"
          style={{
            opacity: isOpen ? 1 : 0,
            maxHeight: isOpen ? '2000px' : '0',
            overflow: 'hidden',
            transition: 'opacity 0.6s ease, max-height 0.6s ease'
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="column is-one-third"
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <div
                  className="box"
                  style={{
                    height: '100%',
                    backgroundColor: '#fff',
                    color: '#204051',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                >
                  <p className="has-text-weight-semibold">{cert.name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
