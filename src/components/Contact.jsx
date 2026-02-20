import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  // Pre-generate particles for consistency
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

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: '0cristianosaldanha0@gmail.com',
      link: 'mailto:0cristianosaldanha0@gmail.com',
      color: '#84A9AC'
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/cristiano-saldanha',
      link: 'https://www.linkedin.com/in/cristiano-saldanha-b9757a261',
      color: '#3B6978'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/Cristiano-Saldanha-Uk',
      link: 'https://github.com/Cristiano-Saldanha-Uk',
      color: '#204051'
    }
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #1a2f3f 0%, #204051 50%, #3B6978 100%)',
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

      {/* Light streaks */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(202,232,213,0.15), transparent)',
            top: `${30 + i * 40}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.3, 0],
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
        maxWidth: '600px', 
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
          Get in Touch
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
            margin: '0 auto 3rem',
            borderRadius: '3px',
          }}
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '3rem',
            lineHeight: '1.8',
          }}
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        </motion.p>

        {/* Vertical contact cards - LINEAR FLOW */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          width: '100%',
        }}>
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.link}
              target={method.label === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                x: 10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              style={{
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '1.5rem 2rem',
                border: '1px solid rgba(202,232,213,0.15)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                textAlign: 'left',
              }}
            >
              {/* Hover glow effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at 0% 50%, ${method.color}20, transparent 70%)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                whileHover={{ opacity: 1 }}
              />

              {/* Icon circle */}
              <div style={{
                fontSize: '2rem',
                background: 'rgba(255,255,255,0.1)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(202,232,213,0.2)',
                boxShadow: '0 0 15px rgba(202,232,213,0.1)',
                flexShrink: 0,
              }}>
                {method.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#CAE8D5',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '0.3rem',
                }}>
                  {method.label}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#fff',
                  fontWeight: '500',
                  wordBreak: 'break-word',
                }}>
                  {method.value}
                </div>
              </div>

              {/* Arrow indicator */}
              <div style={{
                color: 'rgba(202,232,213,0.5)',
                fontSize: '1.2rem',
                transition: 'transform 0.3s ease',
                marginRight: '0.5rem',
              }}>
                →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            marginTop: '3rem',
            padding: '1.5rem',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.95rem',
            borderTop: '1px solid rgba(202,232,213,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <span>📍</span> Based in Newcastle, UK • Available for internships and opportunities
        </motion.div>
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