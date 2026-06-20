import React, { useEffect, useRef, useState } from "react";
import "./StatsCompact.css";

const StatCard = ({ icon, target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    let animated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          animated = true;

          let current = 0;
          const increment = Math.ceil(target / 50);

          const updateCounter = () => {
            current += increment;

            if (current < target) {
              setCount(current);
              requestAnimationFrame(updateCounter);
            } else {
              setCount(target);
            }
          };

          updateCounter();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="col-lg-3 col-md-6">
      <div className="stat-compact-item" ref={cardRef}>
        <div className="stat-compact-icon">
          <i className={icon}></i>
        </div>

        <div className="stat-compact-number">
          {count}
          <span className="plus">{suffix}</span>
        </div>

        <div className="stat-compact-label">
          {label}
        </div>

        <div className="stat-compact-divider"></div>
      </div>
    </div>
  );
};

const StatsCompact = () => {
  const stats = [
    {
      icon: "fas fa-code",
      target: 4,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      icon: "fas fa-smile",
      target: 99,
      suffix: "%",
      label: "Client Satisfaction",
    },
    {
      icon: "fas fa-globe",
      target: 1,
      suffix: "+",
      label: "Countries Served",
    },
    {
      icon: "fas fa-trophy",
      target: 5,
      suffix: "+",
      label: "Industry Awards",
    },
  ];

  return (
    <section className="stats-compact" style={{backgroundImage: "linear-gradient(rgba(31, 40, 62, 0.189), rgba(47, 57, 84, 0.452)), url('./stats.png')"}}>
      <div className="container">
        <div className="row g-3">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCompact;