import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        <div className="project-card neon-glow">
          <h3>Voting App</h3>
          <p>A secure online voting platform.</p>
        </div>
        <div className="project-card neon-glow">
          <h3>Hotel Management</h3>
          <p>Manage bookings, rooms, and services with ease.</p>
        </div>
        <div className="project-card neon-glow">
          <h3>Parveen Auto Mobile</h3>
          <p>A custom website for a local auto business.</p>
        </div>
        <div className="project-card neon-glow">
          <h3>Cosmetic Store</h3>
          <p>E-commerce site for beauty products.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
