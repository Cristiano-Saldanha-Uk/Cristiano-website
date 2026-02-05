import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{
        background: 'linear-gradient(to right, #204051, #3B6978, #84A9AC)',
        color: '#fff',
      }}
    >
      <div className="container has-text-centered">
        <h2 className="title" style={{ color: '#fff' }}>
          Contact Me
        </h2>

        <p>Email: <a href="mailto:0cristianosaldanha0@gmail.com" style={{ color: '#98ABEE' }}>0cristianosaldanha0@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/cristiano-saldanha-b9757a261" target="_blank" rel="noreferrer" style={{ color: '#98ABEE' }}>Visit Profile</a></p>
      </div>
    </section>
  );
}
