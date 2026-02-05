import React, { useState } from 'react';

const techSkills = [
  'React', 'Python', 'Java', 'SQL', 'C', 'Linux', 'Bash',
  'Django', 'Lua', 'Git', 'GitHub', 'HTML', 'CSS'
];

export default function TechStack() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="tech" 
      className="section has-background-light"
      style={{background: 'linear-gradient(to left, #204051, #3B6978, #84A9AC)'}}
    >
      <div 
        className="container has-text-centered"
      >
        <h2 className="title is-3"
          style={{
            color: '#fff'}}
        >Tech Stack</h2>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-icon"
          style={{
            color: '#fff',
            cursor: 'pointer',
            fontSize: '2rem',
            display: 'inline-block',
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
          className="tags is-centered is-flex-wrap-wrap"
          style={{
            justifyContent: 'center',
            marginTop: isOpen ? '1rem' : '0',
            opacity: isOpen ? 1 : 0,
            maxHeight: isOpen ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'opacity 0.6s ease, max-height 0.6s ease'
          }}
        >
          {techSkills.map((skill, index) => (
            <span
              key={index}
              className="tag is-info is-light is-medium m-2"
              style={{
                padding: '0.75em 1.25em',
                fontSize: '1rem',
                animation: isOpen ? `fadeIn 0.5s ease ${index * 0.05}s forwards` : 'none',
                opacity: 0
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
