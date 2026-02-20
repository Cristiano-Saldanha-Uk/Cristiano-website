import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Magnetic cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!titleRef.current || !subtitleRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      titleRef.current.style.transform = `translate(${x}px, ${y}px)`;
      subtitleRef.current.style.transform = `translate(${x / 1.5}px, ${y / 1.5}px)`;
    };

    const resetTransform = () => {
      if (!titleRef.current || !subtitleRef.current) return;
      titleRef.current.style.transform = 'translate(0, 0)';
      subtitleRef.current.style.transform = 'translate(0, 0)';
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseleave', resetTransform);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseleave', resetTransform);
      }
    };
  }, []);

  // Pre-generate particles for performance
  const particles = useRef([]);
  
  useEffect(() => {
    particles.current = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      width: i % 3 === 0 ? '4px' : '2px',
      height: i % 3 === 0 ? '4px' : '2px',
      background: i % 2 === 0 ? 'rgba(202,232,213,0.6)' : 'rgba(132,169,172,0.6)',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 3,
      xMove: Math.random() * 30 - 15,
    }));
  }, []);

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a2f3f 0%, #204051 40%, #3B6978 80%, #84A9AC 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 20s ease infinite',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 2D grid background - NO 3D PERSPECTIVE */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(202,232,213,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(202,232,213,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.5,
      }} />

      {/* Floating particles - KEPT */}
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
            boxShadow: '0 0 10px currentColor',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, p.xMove, 0],
            opacity: [0.2, 1, 0.2],
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

      {/* Light streaks - KEPT */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(202,232,213,0.2), transparent)',
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* Main content with parallax */}
      <motion.div 
        style={{ 
          y, 
          opacity,
          textAlign: 'center', 
          zIndex: 10, 
          padding: '0 2rem',
          maxWidth: '1000px',
        }}
      >
        <h1
          ref={titleRef}
          style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: '#fff',
            marginBottom: '1rem',
            fontWeight: '700',
            letterSpacing: '2px',
            textShadow: '0 2px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.1s ease-out',
            display: 'inline-block',
          }}
        >
          Cristiano Saldanha
        </h1>
        
        <h2
          ref={subtitleRef}
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: '300',
            letterSpacing: '1px',
            marginBottom: '2.5rem',
            transition: 'transform 0.1s ease-out',
          }}
        >
          Software Engineering Student at Newcastle University
        </h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/Cristiano_CV_2026.pdf"
            download
            style={{
              display: 'inline-block',
              padding: '1rem 3rem',
              background: 'linear-gradient(135deg, #84A9AC, #CAE8D5)',
              color: '#204051',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '50px',
              transition: 'all 0.2s ease',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            }}
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

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