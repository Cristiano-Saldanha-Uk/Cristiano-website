import React, { useState, useRef, useEffect } from 'react';

const projects = [
  {
    title: 'Scalping Bot (Python + Alpaca)',
    description:
      'Live-trading bot using Alpaca API, backtesting engine, and real-time data filters.',
    link: 'https://github.com/Cristiano-Saldanha-Uk/Scalping-Trading-Bot',
    tags: ['Python', 'Alpaca API', 'Trading', 'Real-time'],
    icon: '📈'
  },
  {
    title: 'Python File Manager (Legacy)',
    description:
      'High school Python file manager project preserved as a learning artifact.',
    link: 'https://github.com/Cristiano-Saldanha-Uk/Python-File-Manager-Legacy',
    tags: ['Python', 'File System', 'Legacy'],
    icon: '📁'
  },
  {
    title: 'Student Management System (Legacy)',
    description:
      'Python-based student management system with GUI and MySQL CRUD operations.',
    link: 'https://github.com/Cristiano-Saldanha-Uk/Student-Management-System-Legacy',
    tags: ['Python', 'MySQL', 'GUI', 'CRUD'],
    icon: '🎓'
  },
  {
    title: 'AI Collision Detection System',
    description:
      'AI system detecting altercations using bounding box collision logic.',
    link: '#',
    tags: ['AI', 'Computer Vision', 'Python'],
    icon: '🤖'
  },
  {
    title: 'Linux Automation Toolkit',
    description:
      'Advanced Bash automation scripts for monitoring and deployments.',
    link: '#',
    tags: ['Bash', 'Linux', 'DevOps', 'Automation'],
    icon: '⚡'
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const firstThree = projects.slice(0, 3);
  const remaining = projects.slice(3);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(145deg, #0A1929 0%, #1A2F3F 50%, #204051 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(255,215,0,0.03) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2
            style={{
              color: '#FFD700',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              marginBottom: '1rem',
              opacity: 0.8,
            }}
          >
            Portfolio
          </h2>
          <h3
            style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '300',
              marginBottom: '1.5rem',
            }}
          >
            Featured <span style={{ color: '#FFD700', fontWeight: '400' }}>Projects</span>
          </h3>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #FFD700 0%, rgba(255,215,0,0.3) 100%)',
            margin: '0 auto',
            borderRadius: '2px',
          }} />
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* First 3 Always Visible */}
          {firstThree.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              index={idx}
              isHovered={hoveredCard === idx}
              setHoveredCard={setHoveredCard}
            />
          ))}

          {/* Animated Remaining Projects */}
          {remaining.map((project, idx) => (
            <div
              key={idx}
              style={{
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: showAll ? 1 : 0,
                transform: showAll
                  ? 'translateY(0px) scale(1)'
                  : 'translateY(30px) scale(0.95)',
                maxHeight: showAll ? '500px' : '0',
                overflow: 'hidden',
                pointerEvents: showAll ? 'auto' : 'none',
              }}
            >
              {showAll && (
                <ProjectCard 
                  project={project} 
                  index={idx + 3}
                  isHovered={hoveredCard === idx + 3}
                  setHoveredCard={setHoveredCard}
                />
              )}
            </div>
          ))}
        </div>

        {/* Premium Show More Button */}
        {remaining.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0.2) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,215,0,0.3)',
                color: '#FFD700',
                borderRadius: '50px',
                padding: '1rem 3rem',
                fontSize: '1rem',
                fontWeight: '500',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(255,215,0,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(255,215,0,0.2)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(255,215,0,0.25) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,215,0,0.1)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0.2) 100%)';
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>
                {showAll ? 'Show Less Projects ↑' : 'Explore More Projects ↓'}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ✨ Premium Project Card Component */
function ProjectCard({ project, index, isHovered, setHoveredCard }) {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 215, 0, 0.1)',
        padding: '2rem',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,215,0,0.2)' 
          : '0 10px 30px rgba(0,0,0,0.2)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Animated gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 0%, rgba(255,215,0,0.1) 0%, transparent 70%)',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        fontSize: '3rem',
        marginBottom: '1.5rem',
        position: 'relative',
        display: 'inline-block',
        width: 'fit-content',
      }}>
        {project.icon}
      </div>

      {/* Title */}
      <h3 style={{
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: '500',
        marginBottom: '1rem',
        position: 'relative',
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        color: 'rgba(255,255,255,0.7)',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        position: 'relative',
        flex: 1,
      }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        position: 'relative',
      }}>
        {project.tags.map((tag, i) => (
          <span
            key={i}
            style={{
              background: 'rgba(255,215,0,0.1)',
              color: '#FFD700',
              padding: '0.3rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '400',
              letterSpacing: '0.5px',
              border: '1px solid rgba(255,215,0,0.2)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub Link Button */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          background: 'transparent',
          border: '1px solid rgba(255,215,0,0.3)',
          color: '#FFD700',
          padding: '0.8rem 1.5rem',
          borderRadius: '30px',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: '500',
          letterSpacing: '1px',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          marginTop: 'auto',
          width: 'fit-content',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#FFD700';
          e.currentTarget.style.color = '#0A1929';
          e.currentTarget.style.transform = 'translateX(5px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#FFD700';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        <span>View on GitHub</span>
        <span style={{ fontSize: '1.2rem', transition: 'transform 0.3s ease' }}>→</span>
      </a>
    </div>
  );
}