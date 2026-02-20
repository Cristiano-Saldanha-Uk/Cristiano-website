import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#204051',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            color: '#CAE8D5',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: '300',
            letterSpacing: '8px',
            marginBottom: '2rem',
            textShadow: '0 0 20px rgba(202,232,213,0.3)',
          }}
        >
          CRISTIANO
        </motion.h1>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            width: '300px',
            height: '2px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #84A9AC, #CAE8D5)',
              borderRadius: '2px',
              boxShadow: '0 0 10px #CAE8D5',
            }}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            color: '#fff',
            marginTop: '1rem',
            fontSize: '0.9rem',
            letterSpacing: '2px',
          }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
}