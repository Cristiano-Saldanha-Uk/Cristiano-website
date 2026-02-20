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

    // Add hover effect to all links and buttons
    document.querySelectorAll('a, button, .navbar-item, .project-card').forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      document.querySelectorAll('a, button, .navbar-item, .project-card').forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  const cursorStyle = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
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
  };

  return <div style={cursorStyle} />;
}