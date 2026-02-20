import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = ['about', 'tech', 'projects', 'certifications', 'contact'];

  const navItemStyle = {
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.85)',
    position: 'relative',
    paddingBottom: '6px',
    transition: 'color 0.3s ease',
    fontSize: '0.95rem',
    fontWeight: '400',
    letterSpacing: '0.5px',
  };

  const underlineStyle = {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '0%',
    height: '2px',
    background: 'linear-gradient(90deg, #84A9AC, #CAE8D5)',
    transition: 'width 0.3s ease',
    borderRadius: '2px',
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled 
          ? 'rgba(32, 64, 81, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(202, 232, 213, 0.15)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.8rem 0' : '1.5rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link
          to="hero"
          smooth
          duration={800}
          spy={true}
          onSetActive={() => setActiveSection('hero')}
          style={{
            color: '#fff',
            fontSize: '1.6rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#CAE8D5'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
        >
          Cristiano
        </Link>

        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {navItems.map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={800}
              offset={-70}
              spy={true}
              onSetActive={() => setActiveSection(section)}
              style={{
                ...navItemStyle,
                color: activeSection === section ? '#CAE8D5' : navItemStyle.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#CAE8D5';
                const underline = e.currentTarget.querySelector('.underline');
                if (underline) underline.style.width = '100%';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                }
                const underline = e.currentTarget.querySelector('.underline');
                if (underline) underline.style.width = '0%';
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="underline" style={underlineStyle}></span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}