import { useEffect, useRef, useState } from "react";
import "./Testinomial.css";

const data = [
  {
    title: "A reliable development partner we trust.",
    text: "ASDTech Creation helped us build a scalable system with clean architecture and fast performance.",
    name: "Arjun Mehta",
    role: "CEO, TechNova",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    title: "Excellent UI and backend execution.",
    text: "They delivered ahead of schedule with great quality and smooth UX.",
    name: "Sarah Johnson",
    role: "Founder, StyleCart",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    title: "Highly professional engineering team.",
    text: "Strong communication and scalable backend system delivered perfectly.",
    name: "Michael Lee",
    role: "CTO, FinEdge",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5
  }
];

function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [fade, setFade] = useState(false);

  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  const d = data[current];

  const next = () => {
    setFade(true);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % data.length);
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
    setAutoPlay((prev) => !prev);
  };

  // AUTO SLIDER
  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(next, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [autoPlay]);

  // PROGRESS BAR ANIMATION
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

        {/* <div className="testimonials-header text-center mb-5">
          <span className="badge"></span>
          <h2>What clients say about ASDTech Creation</h2>
          <p>Real feedback from real projects and real clients</p>
        </div> */}


 <div className="section-header">
      <span className="section-badge"><i className="fas fa-gem me-1"></i> Testimonials</span>
      <h2 className="section-title">What clients say about ASDTech Creation</h2>
      <p className="text-secondary">Real feedback from real projects and real clients</p>
    </div>


        <div className="row g-4">

          {/* MAIN CARD */}
          <div className="col-lg-7">
            <div className={`main-card ${fade ? "fade" : ""}`}>

              <div className="main-topbar">
                <div className="rating">
                  {"★".repeat(d.rating)}
                </div>

                <button id="toggleBtn" onClick={toggleAuto}>
                  {autoPlay ? "⏸" : "▶"}
                </button>
              </div>

              <h3>“{d.title}”</h3>
              <p>{d.text}</p>

              <div className="main-user">
                <img src={d.img} alt={d.name} />
                <div>
                  <strong>{d.name}</strong>
                  <span>{d.role}</span>
                </div>
              </div>

              <div className="progress-bar-wrap">
                <div className="progress-bar" ref={progressRef}></div>
              </div>

            </div>
          </div>

          {/* SIDE LIST */}
          <div className="col-lg-5">
            <div className="side-list">

              {data.map((item, i) => (
                <div
                  key={i}
                  className={`side-item ${i === current ? "active" : ""}`}
                  onClick={() => selectTestimonial(i)}
                >
                  <p>{item.title}</p>
                  <span>{item.name}</span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonial;