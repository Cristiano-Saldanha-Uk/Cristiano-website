import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      style={{
        padding: '2rem',
        background: '#1a2f3f',
        color: 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        borderTop: '1px solid rgba(202,232,213,0.1)',
        position: 'relative',
      }}
    >
      <p style={{ 
        margin: 0,
        fontSize: '0.95rem',
        letterSpacing: '0.5px',
      }}>
        © {new Date().getFullYear()} Cristiano Saldanha. All rights reserved.
      </p>
      <p style={{ 
        margin: '0.5rem 0 0',
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.4)',
      }}>
        Built with React • Designed with precision
      </p>
    </motion.footer>
  );
}