import React, { useState, useEffect } from "react";
import "./TechnologiesSection.css";

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  useEffect(() => {
    const container = document.getElementById("particleField");

    if (!container) return;

    for (let i = 0; i < 60; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      const size = Math.random() * 4 + 2;

      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDuration =
        Math.random() * 15 + 8 + "s";
      particle.style.animationDelay =
        Math.random() * 5 + "s";

      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  const frontend = [
    {
      icon: "fab fa-html5",
      name: "HTML5",
      desc: "Semantic Structure",
    },
    {
      icon: "fab fa-css3-alt",
      name: "CSS3",
      desc: "Modern Animations",
    },
    {
      icon: "fab fa-bootstrap",
      name: "Bootstrap",
      desc: "Responsive Framework",
    },
    {
      icon: "fab fa-js",
      name: "JavaScript",
      desc: "Interactive Magic",
    },
    {
      icon: "fab fa-react",
      name: "React.js",
      desc: "Component Based UI",
    },
  ];

  const backend = [
    {
      icon: "fab fa-java",
      name: "Java",
      desc: "Enterprise Grade",
    },
    {
      icon: "fab fa-php",
      name: "PHP",
      desc: "Dynamic Backend",
    },
  ];

  const database = [
    {
      icon: "fas fa-database",
      name: "MySQL",
      desc: "Relational Database",
    },
    {
      icon: "fas fa-fire",
      name: "Firebase",
      desc: "Realtime NoSQL",
    },
  ];

  const renderTech = (items) => (
    <div className="tech-hex-grid">
      {items.map((item, index) => (
        <div className="tech-hex-item" key={index}>
          <div className="tech-hex-icon">
            <i className={item.icon}></i>
          </div>

          <div className="tech-hex-name">{item.name}</div>

          <div className="tech-hex-desc">{item.desc}</div>

          <div className="tech-glow"></div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="tech-futuristic">
      <div className="animated-bg"></div>

      <div
        className="particle-field"
        id="particleField"
      ></div>

      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-badge">
            <i className="fas fa-microchip me-1"></i>
            Our Arsenal
          </span>

          <h2 className="section-title">
            Technologies We Master
          </h2>

          <p>
            Cutting-edge tools for modern web solutions
          </p>
        </div>

        <div className="tech-tabs">
          <button
            className={`tech-tab-btn ${
              activeTab === "frontend" ? "active" : ""
            }`}
            onClick={() => setActiveTab("frontend")}
          >
            Frontend
          </button>

          <button
            className={`tech-tab-btn ${
              activeTab === "backend" ? "active" : ""
            }`}
            onClick={() => setActiveTab("backend")}
          >
            Backend
          </button>

          <button
            className={`tech-tab-btn ${
              activeTab === "database" ? "active" : ""
            }`}
            onClick={() => setActiveTab("database")}
          >
            Database
          </button>
        </div>

        {activeTab === "frontend" &&
          renderTech(frontend)}

        {activeTab === "backend" &&
          renderTech(backend)}

        {activeTab === "database" &&
          renderTech(database)}
      </div>
    </section>
  );
};

export default TechnologiesSection;