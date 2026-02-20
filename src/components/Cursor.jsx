import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

<<<<<<< HEAD
    // Add hover effect to all links and buttons
    document.querySelectorAll('a, button, .navbar-item, .project-card').forEach(el => {
=======
    const interactiveElements = document.querySelectorAll('a, button, .navbar-item, .project-card, .tech-tag, .cert-card');
    interactiveElements.forEach(el => {
>>>>>>> e0ada8ad1977a8283bc779ea003ea47232dbd327
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
<<<<<<< HEAD
      document.querySelectorAll('a, button, .navbar-item, .project-card').forEach(el => {
=======
      interactiveElements.forEach(el => {
>>>>>>> e0ada8ad1977a8283bc779ea003ea47232dbd327
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

<<<<<<< HEAD
=======
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

>>>>>>> e0ada8ad1977a8283bc779ea003ea47232dbd327
  const cursorStyle = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
<<<<<<< HEAD
    width: linkHovered ? '50px' : '20px',
    height: linkHovered ? '50px' : '20px',
    borderRadius: '50%',
    backgroundColor: linkHovered ? 'rgba(202, 232, 213, 0.2)' : 'rgba(202, 232, 213, 0.5)',
    border: '2px solid #CAE8D5',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
    transition: 'width 0.2s, height 0.2s, background 0.2s, transform 0.1s',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    opacity: hidden ? 0 : 1,
=======
    width: linkHovered ? '60px' : '24px',
    height: linkHovered ? '60px' : '24px',
    borderRadius: '50%',
    backgroundColor: linkHovered ? 'rgba(202, 232, 213, 0.15)' : 'rgba(202, 232, 213, 0.3)',
    border: linkHovered ? '2px solid #CAE8D5' : '1px solid rgba(202, 232, 213, 0.6)',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
    transition: 'width 0.3s, height 0.3s, background 0.3s, transform 0.1s, border 0.3s',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    opacity: hidden ? 0 : 1,
    boxShadow: linkHovered ? '0 0 20px rgba(202,232,213,0.3)' : 'none',
>>>>>>> e0ada8ad1977a8283bc779ea003ea47232dbd327
  };

  return <div style={cursorStyle} />;
}