import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certifications = [
  {
    name: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/c51bc683-e970-4dcf-a61b-62169ae2adbf'
  },
  {
    name: 'Artificial Intelligence V2',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/c9669ae6-c044-46c3-a3b0-36581b2dd293'
  },
  {
    name: 'Watson Machine Learning',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/5aedbe21-6cff-4dff-a145-1a78f7fe20e6'
  },
  {
    name: 'Detect Fraud Using Visual Recognition',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/8a8490a1-4be5-4ba6-9d4b-8714b2c32f65'
  },
  {
    name: 'Blockchain Introduction',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/699ecef7-2d50-430c-a699-230175c0aa32'
  },
  {
    name: 'Data Science on IBM Cloud',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/b7dd035c-1738-435d-bd92-d291cb3c2732'
  }
];

export default function Certification() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Pre-generate particles for performance
  const particles = useRef([]);
  
  useEffect(() => {
    particles.current = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 4,
      delay: Math.random() * 3,
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
      id="certifications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #3B6978, #204051)',
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
        opacity: 0.3,
      }} />

      {/* Floating particles */}
      {particles.current.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: 'rgba(202,232,213,0.3)',
            borderRadius: '50%',
            top: p.top,
            left: p.left,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div style={{ 
        maxWidth: '1000px', 
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
          Certifications
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

        {/* Simple glowing dropdown button - MATCHES TECH STACK */}
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
            {isOpen ? 'HIDE CERTIFICATIONS ↑' : 'VIEW CERTIFICATIONS ↓'}
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
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
              }}>
                {certifications.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                      borderColor: '#CAE8D5',
                    }}
                    style={{
                      textDecoration: 'none',
                      padding: '2rem',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(202,232,213,0.15)',
                      transition: 'all 0.3s ease',
                      color: '#fff',
                    }}
                  >
                    <div style={{ 
                      fontSize: '0.9rem', 
                      marginBottom: '0.8rem', 
                      color: '#CAE8D5',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}>
                      {cert.issuer}
                    </div>
                    <div style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '500',
                      lineHeight: 1.5,
                    }}>
                      {cert.name}
                    </div>
                  </motion.a>
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