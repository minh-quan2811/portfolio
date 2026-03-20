// Footer component
import React from 'react';
import '../../styles/layout.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/minh-quan2811' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/minh-quan-dang-ece' },
    { label: 'Email', url: 'danggminhquan2811@gmail.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer-name">
        Dang Minh Quan · {currentYear} · 海軍
      </div>
      <div className="footer-links">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
