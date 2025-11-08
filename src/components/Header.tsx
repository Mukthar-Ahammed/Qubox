import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Contact'];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <img
  src="../Assets/Logo.png" 
  alt="Sample Logo"
  className="logo"
/>

        </div>

        
        <nav className="nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link}>
                <ScrollLink
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={800}
                  className="nav-link cursor-pointer"
                >
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="mobile-menu-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link}>
                <ScrollLink
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={800}
                  className="mobile-nav-link cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
