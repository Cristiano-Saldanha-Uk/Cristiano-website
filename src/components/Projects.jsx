import React from 'react';

const projects = [
  {
    title: 'Scalping Bot (Python + Alpaca)',
    description: 'Live-trading bot using Alpaca API, backtesting engine, and real-time data filters.',
    link: 'https://github.com/Cristiano-Saldanha-Uk/Scalping-Trading-Bot'
  },
  {
    title: 'Python File Manager (Legacy)',
    description: 'High school Python file manager project preserved as a learning artifact, showcasing early file handling and system operations skills.',
    link: 'https://github.com/Cristiano-Saldanha-Uk/Python-File-Manager-Legacy'
  },
  {
    title: 'Student Management System (Legacy)',
    description: 'High school final project: a Python-based student management system with GUI and MySQL CRUD operations. Built using Python and released under the MIT License.',
    link: 'https://github.com/Cristiano-Saldanha-Uk/Student-Management-System-Legacy'
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{background: 'linear-gradient(to bottom right, #204051, #3B6978, #84A9AC)'}}
    >
      <div className="container">
        <h2 className="title has-text-centered" style={{ color: '#fff' }}>Projects</h2>
        <div className="columns is-multiline">
          {projects.map((project, idx) => (
            <div className="column is-one-third" key={idx}>
              <div
                className="box has-text-centered project-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)', // Safari support
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: 'none',
                  color: '#fff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 className="title is-5">{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className="button is-link mt-3"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
