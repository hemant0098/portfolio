import React from 'react';
import './About.css';
// import profilePic from './assets/profile.jpg'; // add your photo here

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-image-wrapper">
          {/* <img src={profilePic} alt="Hemant" className="about-image" /> */}
        </div>
        <div className="about-text">
          <p>
            Hello! I’m <strong>Hemant</strong>, a Full-Stack Developer passionate about crafting
            immersive web experiences. I love turning design mockups into high-performance,
            responsive applications.
          </p>
          <p>
            When I’m not coding, you’ll find me exploring new JS libraries, gaming, or sketching
            futuristic UI ideas.
          </p>
          <div className="skills">
            {['React', 'Node.js', 'Express', 'MongoDB', 'CSS3', 'JavaScript'].map(skill => (
              <span className="skill-badge" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
