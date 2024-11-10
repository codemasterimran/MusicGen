import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-content">
      <h2>Contact Us</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Your Message</label>
        <textarea placeholder="Type your message here..." rows="4"></textarea>

        <button type="submit">Send Message</button>
      </form>
      
      <div className="social-media">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
