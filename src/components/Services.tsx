import React, { useState, useRef } from "react";
import "../styles/Services.css";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  buttonText: string;
  isHighlighted: boolean;
}

const Services: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string>("video-production");
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services: Service[] = [
    {
      id: "video-production",
      title: "Video Production",
      subtitle: "Crafting Stories That Move",
      description:
        "From concept to screen, we produce cinematic visuals that connect emotionally and captivate your audience.",
      features: [
        "Cinematic storytelling",
        "Professional editing & effects",
        "End-to-end production",
      ],
      buttonText: "Explore",
      isHighlighted: true,
    },
    {
  id: "3d-modelling",
  title: "3D Modelling & Animation",
  subtitle: "Design. Animate. Inspire.",
  description:
    "Bring your ideas to life with stunning 3D visuals, animations, and immersive storytelling that captivate audiences.",
  features: [
    "Realistic 3D modelling",
    "Product and character animation",
    "Motion graphics integration",
  ],
  buttonText: "Discover",
  isHighlighted: false,
},
    {
      id: "web-development",
      title: "Web Development",
      subtitle: "Digital Experiences That Inspire",
      description:
        "Designing responsive, fast, and user-centric websites that elevate your online identity.",
      features: [
        "Custom web apps",
        "Modern UI/UX design",
        "Performance optimization",
      ],
      buttonText: "Learn More",
      isHighlighted: false,
    },
    {
      id: "branding",
      title: "Brand Identity",
      subtitle: "Shape the Way the World Sees You",
      description:
        "We help you define, express, and amplify your brand across all platforms.",
      features: ["Logo & visual identity", "Brand strategy", "Design systems"],
      buttonText: "View More",
      isHighlighted: false,
    },
  ];

  const handleCardClick = (
    id: string,
    index: number,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    setActiveCard(id);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest", // ✅ Prevents page from jumping vertically
    });
  };

  return (
    <section className="services-section" id="services">
      <h2 className="section-title">Our Expertise</h2>
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`service-card ${
                activeCard === service.id ? "active" : ""
              }`}
              onClick={(e) => handleCardClick(service.id, index, e)}
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="service-button">VIEW WORKS</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
