import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Hemant | Built with 💻 and ☕</p>
      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:youremail@example.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
