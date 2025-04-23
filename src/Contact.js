import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Let's Connect</h2>
      <p>Interested in working together or have a query? Reach out!</p>

      <div className="contact-links">
        <a href="mailto:hemant@example.com" className="contact-btn">📧 Email Me</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="contact-icon linkedin">LinkedIn</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="contact-icon github">GitHub</a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="contact-icon twitter">Twitter</a>
      </div>
    </div>
  );
}

export default Contact;
