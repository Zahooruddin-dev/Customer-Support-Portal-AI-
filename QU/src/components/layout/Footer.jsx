// filepath: /customer-support-portal/customer-support-portal/src/components/layout/Footer.jsx
import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Customer Support Portal. All rights reserved.</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;