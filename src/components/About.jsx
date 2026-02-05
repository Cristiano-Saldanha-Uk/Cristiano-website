import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{
        background: 'transparent', // Removed gradient for shared bg
        color: '#fff',
      }}
    >
      <div className="container">
        <h2 className="title has-text-centered low-text">About Me</h2>
        <p className="has-text-centered">
          I’m a second-year Software Engineering student at Newcastle University with a strong interest in building modern, scalable, and user-friendly software. I’m currently seeking internship opportunities where I can apply my skills, gain real-world experience, and grow as a developer. I'm passionate about learning new technologies, solving complex problems, and contributing to innovative projects that make an impact.
        </p>
      </div>
    </section>
  );
}
