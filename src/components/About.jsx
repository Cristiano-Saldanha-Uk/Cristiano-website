import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      id="about"
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #204051, #3B6978)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: `radial-gradient(#CAE8D5 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }} />

      <div style={{ 
        maxWidth: '900px', 
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
            marginBottom: '2rem',
            color: '#fff',
            letterSpacing: '1px',
          }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '3rem',
            borderRadius: '24px',
            border: '1px solid rgba(202,232,213,0.15)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          }}
        >
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.9',
            marginBottom: '2rem',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.9)',
          }}>
            I'm a second-year Software Engineering student at Newcastle University 
            with a strong interest in building modern, scalable, and user-friendly software.
          </p>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.9',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.9)',
          }}>
            I'm currently seeking internship opportunities where I can apply my skills, 
            gain real-world experience, and grow as a developer. I'm passionate about 
            learning new technologies and solving complex problems.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { number: '10+', label: 'Projects' },
            { number: '6', label: 'Certifications' },
            { number: '13+', label: 'Technologies' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.1, y: -5 }}
              style={{
                textAlign: 'center',
                padding: '1.5rem 2rem',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(202,232,213,0.1)',
                minWidth: '140px',
              }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '600', 
                color: '#CAE8D5',
                marginBottom: '0.5rem',
                textShadow: '0 0 20px rgba(202,232,213,0.3)',
              }}>
                {stat.number}
              </div>
              <div style={{ 
                fontSize: '1rem', 
                color: 'rgba(255,255,255,0.8)',
                letterSpacing: '1px',
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}