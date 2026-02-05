// File: src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer has-background-dark has-text-white-ter">
      <div className="content has-text-centered">
        <p>
          <strong>Cristiano Saldanha</strong> © {new Date().getFullYear()}. Built with React & Bulma.
        </p>
      </div>
    </footer>
  );
}
