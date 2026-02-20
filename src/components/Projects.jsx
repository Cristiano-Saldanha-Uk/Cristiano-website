import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'Scalping Bot (Python + Alpaca)',
    description: 'Live-trading bot using Alpaca API, backtesting engine, and real-time data filters. Implements advanced trading strategies with real-time market data processing.',
    link: 'https://github.com/Cristiano-Saldanha-Uk/Scalping-Trading-Bot',
    tech: ['Python', 'Alpaca API', 'Real-time', 'Trading'],
    color: '#84A9AC',
  },
  {
    title: 'Python File Manager (Legacy)',
    description: 'High school Python file manager project preserved as a learning artifact. Features file operations, directory management, and a clean CLI interface.',
    link: 'https://github.com/Cristiano-Saldanha-Uk/Python-File-Manager-Legacy',
    tech: ['Python', 'File System', 'CLI'],
    color: '#3B6978',
  },
  {
    title: 'Student Management System (Legacy)',
    description: 'Python-based system with GUI and MySQL CRUD operations for student management. Includes attendance tracking, grade management, and reporting features.',
    link: 'https://github.com/Cristiano-Saldanha-Uk/Student-Management-System-Legacy',
    tech: ['Python', 'MySQL', 'GUI', 'CRUD'],
    color: '#204051',
  },
  {
<<<<<<< HEAD
    title: 'AI Collision Detection System',
    description: 'AI system detecting altercations using bounding box collision logic. Uses computer vision and machine learning for real-time monitoring.',
    link: '#',
    tech: ['AI', 'Python', 'Computer Vision', 'ML'],
    color: '#84A9AC',
  },
  {
    title: 'Linux Automation Toolkit',
    description: 'Advanced Bash automation scripts for monitoring and deployments. Includes system health checks, automated backups, and deployment pipelines.',
    link: '#',
    tech: ['Bash', 'Linux', 'DevOps', 'Automation'],
    color: '#3B6978',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce platform with React and Django. Features user authentication, product management, and payment integration.',
    link: '#',
    tech: ['React', 'Django', 'PostgreSQL', 'REST API'],
    color: '#204051',
  }
=======
    title: 'Cristiano Saldanha Portfolio Website',
    description: 'Personal portfolio website built with React to showcase projects, skills, and certifications. Features smooth scrolling, magnetic cursor effects, floating particles, animated gradients, and glass morphism design throughout.',
    link: 'https://github.com/Cristiano-Saldanha-Uk/Cristiano-website',
    tech: ['React', 'Bulma', 'Framer Motion', 'JavaScript'],
    color: '#84A9AC',
    }
>>>>>>> e0ada8ad1977a8283bc779ea003ea47232dbd327
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { ref, controls, variants } = useScrollAnimation();

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        position: 'relative',
      }}
    >
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(132,169,172,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(32,64,81,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: '600',
            textAlign: 'center',
            color: '#204051',
            marginBottom: '1rem',
            letterSpacing: '1px',
          }}
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #204051, #84A9AC)',
            margin: '0 auto 4rem',
            borderRadius: '3px',
          }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="project-card"
              style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: hoveredIndex === index
                  ? '0 30px 50px rgba(32,64,81,0.2)'
                  : '0 10px 30px rgba(32,64,81,0.1)',
                transition: 'box-shadow 0.3s ease',
                border: '1px solid rgba(32,64,81,0.05)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Color accent bar */}
              <motion.div
                animate={{ 
                  width: hoveredIndex === index ? '100%' : '0%',
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '4px',
                  background: project.color,
                  transition: 'width 0.3s ease',
                }}
              />

              <div style={{ 
                display: 'flex', 
                gap: '0.5rem', 
                marginBottom: '1.5rem', 
                flexWrap: 'wrap' 
              }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.4rem 1rem',
                      background: '#e9ecef',
                      color: '#3B6978',
                      borderRadius: '30px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 style={{
                fontSize: '1.6rem',
                color: '#204051',
                marginBottom: '1rem',
                fontWeight: '600',
                lineHeight: 1.3,
              }}>
                {project.title}
              </h3>

              <p style={{
                color: '#3B6978',
                lineHeight: '1.8',
                marginBottom: '2rem',
                fontSize: '1rem',
              }}>
                {project.description}
              </p>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                style={{
                  color: project.color,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderBottom: `2px solid transparent`,
                  paddingBottom: '2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = project.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
              >
                View on GitHub <span style={{ fontSize: '1.2rem' }}>→</span>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(32,64,81,0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 3rem',
                background: 'transparent',
                color: '#204051',
                border: '2px solid #84A9AC',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '500',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {showAll ? 'Show Less ↑' : 'Explore All Projects ↓'}
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}