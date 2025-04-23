import React from 'react';
import './Hero.css';
// import bgVideo from './assets/hero-bg.mp4'; // or use a large gradient image

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Video or image background */}
      {/* <video className="hero-bg" src={bgVideo} autoPlay loop muted /> */}

      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Hi, I’m <span>Hemant</span></h1>
        <h2 className="hero-subtitle">Full-Stack Web Developer</h2>
        <p className="hero-desc">
          I build <em>immersive</em> web apps using React, Node.js & MongoDB.
        </p>
        <a href="#contact" className="btn hero-btn">Hire Me</a>
      </div>

      <div className="scroll-down">
        <span />
        <span />
      </div>
    </section>
  );
}
