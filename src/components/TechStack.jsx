import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techSkills = [
  'React', 'Python', 'Java', 'SQL', 'C', 'Linux', 'Bash',
  'Django', 'Lua', 'Git', 'GitHub', 'HTML', 'CSS', 'JavaScript',
  'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Next.js'
];

export default function TechStack() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Pre-generate particles for performance
  const particles = useRef([]);
  
  useEffect(() => {
    particles.current = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      width: i % 3 === 0 ? '4px' : '2px',
      height: i % 3 === 0 ? '4px' : '2px',
      background: i % 2 === 0 ? 'rgba(202,232,213,0.5)' : 'rgba(132,169,172,0.5)',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 4,
      delay: Math.random() * 3,
      xMove: Math.random() * 20 - 10,
    }));
  }, []);

  // Animation variants for the dropdown content
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.section
      id="tech"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #1a2f3f 0%, #204051 40%, #3B6978 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 20s ease infinite',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 2D grid background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(202,232,213,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(202,232,213,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.5,
      }} />

      {/* Floating particles */}
      {particles.current.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            width: p.width,
            height: p.height,
            background: p.background,
            borderRadius: '50%',
            top: p.top,
            left: p.left,
            boxShadow: '0 0 8px currentColor',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, p.xMove, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light streaks */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(202,232,213,0.2), transparent)',
            top: `${40 + i * 30}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear",
          }}
        />
      ))}

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        position: 'relative',
        zIndex: 2,
        textAlign: 'center' 
      }}>
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            color: '#fff',
            marginBottom: '1rem',
            fontWeight: '700',
            letterSpacing: '2px',
            textShadow: '0 2px 20px rgba(0,0,0,0.2)',
          }}
        >
          Tech Stack
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #84A9AC, #CAE8D5)',
            margin: '0 auto 2rem',
            borderRadius: '3px',
          }}
        />

        {/* Simple glowing dropdown button - NO FLIP */}
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 25px rgba(202,232,213,0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'rgba(202,232,213,0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(202,232,213,0.3)',
              borderRadius: '50px',
              padding: '0.8rem 2.5rem',
              color: '#CAE8D5',
              fontSize: '1rem',
              fontWeight: '400',
              letterSpacing: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: isOpen ? '0 0 20px rgba(202,232,213,0.3)' : 'none',
            }}
          >
            {isOpen ? 'HIDE SKILLS ↑' : 'VIEW SKILLS ↓'}
          </motion.button>
        </motion.div>

        {/* AnimatePresence with proper exit animation */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="dropdown"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ overflow: 'hidden' }}
            >
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.8rem',
                justifyContent: 'center',
              }}>
                {techSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      background: '#CAE8D5',
                      color: '#204051',
                      boxShadow: '0 5px 15px rgba(202,232,213,0.3)',
                      transition: { duration: 0.1 }
                    }}
                    style={{
                      padding: '0.8rem 2rem',
                      background: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: '#fff',
                      borderRadius: '50px',
                      fontSize: '1rem',
                      border: '1px solid rgba(202,232,213,0.15)',
                      transition: 'background 0.15s ease, color 0.15s ease, transform 0.15s ease',
                      cursor: 'default',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.section>
  );
}