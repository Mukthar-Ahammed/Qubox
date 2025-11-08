import React from "react";
import "../styles/Footer.css";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/__qubox?igsh=ZW9vdWl4eG4wNnM4", icon: <Instagram /> },
    { name: "YouTube", url: "#", icon: <Youtube /> },
    { name: "LinkedIn", url: "#", icon: <Linkedin /> },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-container">
        <div className="footer-flex">
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="footer-logo">Qubox</h2>
            <p className="footer-desc">
              Crafting digital experiences with creativity and precision.
            </p>
          </div>

          {/* Social Icons */}
          <div className="footer-socials">
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>© 2025 Qubox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
