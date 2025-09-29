import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">
            © {currentYear} ToyStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
