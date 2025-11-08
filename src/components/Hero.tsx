import React from "react";
import "../styles/Hero.css";
import LiquidEther from "./LiquidEther";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
    
      <div className="liquid-chrome-bg">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

     
      <div className="hero-content">
        <div className="hero-card">
          <h1 className="hero-title">
            Digital Craftsmanship{" "}
            <span className="hero-gradient-text">Redefined.</span>
          </h1>

          <p className="hero-subtitle">
            We craft immersive, future-forward digital experiences blending
            creative design with high-performance technology.
          </p>

          <button className="cta-button">
            <span>Explore Our Work</span>
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
