import { useEffect, useRef, useState } from "react";
import "./Testinomial.css";
import projects from "../api_js/script";

function Testimonial({ projectId = null, mode = "full" }) {
  const testimonialData = projects
    .filter(project => {
      if (!project.testimonial) return false;
      if (projectId) return project.id === projectId;
      return true;
    })
    .map(project => ({
      id: project.id,
      title: project.title,
      text: project.testimonial.message,
      name: project.testimonial.name,
      role: `${project.testimonial.designation}, ${project.testimonial.company}`,
      img:
        project.testimonial.image ||
        "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      projectCategory: project.category,
      projectLink: project.liveUrl
    }));

  const data = testimonialData;

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [fade, setFade] = useState(false);

  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  if (!data.length) {
    return (
      <section className="testimonials-dynamic">
        <div className="container">
          <h2>No testimonials available</h2>
        </div>
      </section>
    );
  }

  const d = data[current];

  const next = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent(prev => (prev + 1) % data.length);
      setFade(false);
    }, 200);
  };

  const selectTestimonial = (i) => {
    setFade(true);
    setTimeout(() => {
      setCurrent(i);
      setFade(false);
    }, 200);
  };

  const toggleAuto = () => {
    setAutoPlay(prev => !prev);
  };

  useEffect(() => {
    if (!autoPlay || data.length <= 1) return;

    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [autoPlay, data.length]);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;

    bar.style.transition = "none";
    bar.style.width = "0%";

    setTimeout(() => {
      bar.style.transition = "width 5s linear";
      bar.style.width = "100%";
    }, 50);
  }, [current]);

  return (
    <section className="testimonials-dynamic">
      <div className="container">

        {/* HEADER ONLY FOR FULL MODE */}
        {mode === "full" && (
          <div className="section-header">
            <span className="section-badge">
              <i className="fas fa-gem me-1"></i> Testimonials
            </span>
            <h2 className="section-title">
              What clients say about ASDTech Creation
            </h2>
            <p className="text-secondary">
              Real feedback from real projects and real clients
            </p>
          </div>
        )}

        {/* CENTER WRAPPER */}
        <div
          className="row g-4 justify-content-center"
        >

          {/* MAIN CARD */}
          <div
            className={
              mode === "single"
                ? "col-12 d-flex justify-content-center"
                : "col-lg-7"
            }
          >
            <div
              className={`main-card ${fade ? "fade" : ""}`}
              style={{
                width: mode === "single" ? "75%" : "100%",
                maxWidth: mode === "single" ? "850px" : "none",
                margin: "0 auto"
              }}
            >

              <div className="main-topbar">
                <div className="rating">
                  {"★".repeat(d.rating || 5)}
                </div>

                {mode === "full" && data.length > 1 && (
                  <button id="toggleBtn" onClick={toggleAuto}>
                    {autoPlay ? "⏸" : "▶"}
                  </button>
                )}
              </div>

              <h3>“{d.title}”</h3>
              <p>{d.text}</p>

              <div className="main-user">
                <img src={d.img} alt={d.name} />
                <div>
                  <strong>{d.name}</strong>
                  <span>{d.role}</span>

                  {d.projectCategory && (
                    <span className="project-tag">
                      Project: {d.projectCategory}
                    </span>
                  )}
                </div>
              </div>

              {mode === "full" && data.length > 1 && (
                <div className="progress-bar-wrap">
                  <div className="progress-bar" ref={progressRef}></div>
                </div>
              )}

            </div>
          </div>

          {/* SIDE LIST ONLY IN FULL MODE */}
          {mode === "full" && data.length > 1 && (
            <div className="col-lg-5">
              <div className="side-list">

                {data.map((item, i) => (
                  <div
                    key={item.id || i}
                    className={`side-item ${i === current ? "active" : ""}`}
                    onClick={() => selectTestimonial(i)}
                  >
                    <p>{item.title}</p>
                    <span>{item.name}</span>

                    {item.projectCategory && (
                      <span className="side-project-tag">
                        {item.projectCategory}
                      </span>
                    )}
                  </div>
                ))}

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default Testimonial;