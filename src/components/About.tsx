import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Qubox</h2>

        <p className="about-intro">
          We're Qubox, and we love bringing great ideas to life.
        </p>

        <div className="about-content">
          <p>
            We’re a creative team that gets our hands dirty in just about
            everything eye catching visuals, compelling videos, and smart web
            apps. Our bread and butter? Making things that don't just look
            amazing but actually function flawlessly.
          </p>

          <p>
            We handle it all from slick marketing materials and motion graphics
            to 3D animations and fullstack web projects. We believe in mixing
            professional polish with a healthy dose of personality.
          </p>

          <p>
            So, whether you need a serious project built or you're just here for
            the creative energy,welcome.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
