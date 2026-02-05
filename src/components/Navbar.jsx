import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav
      className="navbar is-transparent"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgb(48, 55, 56)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="navbar-brand">
        {/* Brand scrolls to top */}
        <Link
          to="hero"
          smooth={true}
          duration={800}
          className="navbar-item has-text-weight-bold"
          style={{ cursor: 'pointer' }}
        >
          Cristiano
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="about" smooth={true} duration={800} className="navbar-item" style={{ cursor: 'pointer' }}>About</Link>
          <Link to="projects" smooth={true} duration={800} className="navbar-item" style={{ cursor: 'pointer' }}>Projects</Link>
          <Link to="contact" smooth={true} duration={800} className="navbar-item" style={{ cursor: 'pointer' }}>Contact</Link>
          <Link to="tech" smooth={true} duration={800} className="navbar-item" style={{ cursor: 'pointer' }}>Tech</Link>
          <Link to="certifications" smooth={true} duration={800} className="navbar-item" style={{ cursor: 'pointer' }}>Certification</Link>
        </div>
      </div>
    </nav>
  );
}
