import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import BreadCrumb from "../component/BreadCrumb";
import Hero from "../component/Hero";
import "./Project_Detail.css";
import projects from "../api_js/script.js";

function Project_Detail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  const [displayIndex, setDisplayIndex] = useState(0);   // what featured shows RIGHT NOW
  const [activeThumb, setActiveThumb] = useState(0);     // which thumb is highlighted

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // refs — never stale inside timers / rAF
  const displayIndexRef  = useRef(0);
  const isAnimatingRef   = useRef(false);
  const isAutoPlayingRef = useRef(true);
  const autoPlayTimer    = useRef(null);
  const thumbnailsRef    = useRef(null);

  if (!project) return <h2>Project not found</h2>;
  const gallery = project.gallery || [];

  /* ─────────────────────────────────────────
     SPARKLE helpers
  ───────────────────────────────────────── */
  function mkSparkle(x, y, type = "medium") {
    const el = document.createElement("div");
    el.className = `sparkle-trail ${type}`;
    el.style.cssText = `left:${x}px;top:${y}px;transform:translate(-50%,-50%);animation-duration:${0.6 + Math.random() * 0.4}s`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }

  function mkBurst(x, y) {
    const colors = ["#4cc9f0","#4361ee","#a5b4fc","#f72585","#ffd700"];
    for (let i = 0; i < 30; i++) {
      const el = document.createElement("div");
      el.className = "sparkle-burst";
      const size  = 4 + Math.random() * 10;
      const angle = Math.random() * Math.PI * 2;
      const dist  = 40 + Math.random() * 100;
      el.style.cssText = `
        width:${size}px;height:${size}px;
        left:${x + Math.cos(angle)*dist}px;top:${y + Math.sin(angle)*dist}px;
        transform:translate(-50%,-50%);
        background:radial-gradient(circle,${colors[~~(Math.random()*colors.length)]},transparent);
        animation-duration:${0.4 + Math.random() * 0.4}s`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 800);
    }
  }

  /* ─────────────────────────────────────────
     CORE: fly butterfly from NEXT thumb → featured,
     then swap the image
  ───────────────────────────────────────── */
  function flyAndSwap(nextIdx, fromThumbEl) {
    // guard: already animating OR same image
    if (isAnimatingRef.current || nextIdx === displayIndexRef.current) return;

    const featuredEl = document.getElementById("spotlightFeatured");
    if (!featuredEl || !fromThumbEl) {
      // no animation possible — just swap
      displayIndexRef.current = nextIdx;
      setDisplayIndex(nextIdx);
      setActiveThumb(nextIdx);
      scrollThumb(nextIdx);
      return;
    }

    isAnimatingRef.current = true;

    const fr = fromThumbEl.getBoundingClientRect();
    const tr = featuredEl.getBoundingClientRect();
    const sx = fr.left + fr.width  / 2;
    const sy = fr.top  + fr.height / 2;
    const ex = tr.left + tr.width  / 2;
    const ey = tr.top  + tr.height / 2;

    // create butterfly
    const bf = document.createElement("div");
    bf.className = "butterfly flying";
    bf.innerHTML = "🦋";
    bf.style.cssText = `position:fixed;left:${sx}px;top:${sy}px;transform:translate(-50%,-50%) scale(0.3);opacity:0;z-index:9999;font-size:1.8rem;pointer-events:none;`;
    document.body.appendChild(bf);

    // initial sparkles at source
    setTimeout(() => {
      bf.style.opacity = "1";
      for (let i = 0; i < 8; i++)
        mkSparkle(
          sx + (Math.random()-0.5)*60,
          sy + (Math.random()-0.5)*60,
          ["large","medium","small"][~~(Math.random()*3)]
        );
    }, 50);

    // trail
    const trail = setInterval(() => {
      if (bf.style.opacity === "0") return;
      const r = bf.getBoundingClientRect();
      const cx = r.left + r.width/2, cy = r.top + r.height/2;
      for (let i = 0; i < 3; i++)
        mkSparkle(
          cx + (Math.random()-0.5)*30,
          cy + (Math.random()-0.5)*30,
          ["large","medium","small"][~~(Math.random()*3)]
        );
    }, 30);

    // animate
    const t0 = Date.now(), dur = 1000;
    function tick() {
      const p = Math.min((Date.now()-t0)/dur, 1);
      const e = p < 0.5 ? 4*p*p*p : 1-Math.pow(-2*p+2,3)/2;
      bf.style.left      = (sx + (ex-sx)*e + Math.sin(e*20)*8) + "px";
      bf.style.top       = (sy + (ey-sy)*e - Math.sin(e*Math.PI)*120 + Math.sin(e*15)*6) + "px";
      bf.style.transform = `translate(-50%,-50%) scale(${0.3+e*0.7}) rotate(${e*250}deg)`;

      if (p < 1) { requestAnimationFrame(tick); return; }

      // butterfly reached featured → burst → swap image
      mkBurst(ex, ey);
      clearInterval(trail);
      bf.style.opacity = "0";
      setTimeout(() => {
        bf.remove();
        // ← image changes ONLY after butterfly lands
        displayIndexRef.current = nextIdx;
        setDisplayIndex(nextIdx);
        setActiveThumb(nextIdx);
        scrollThumb(nextIdx, true);
        isAnimatingRef.current = false;
      }, 300);
    }
    requestAnimationFrame(tick);
  }

  /* ─────────────────────────────────────────
     SCROLL thumbnail into view
  ───────────────────────────────────────── */
  function scrollThumb(index, smooth = true) {
    const container = thumbnailsRef.current;
    if (!container) return;
    const thumbs = container.querySelectorAll(".spotlight-thumb");
    const target = thumbs[index];
    if (!target) return;
    const cr = container.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    if (container.scrollWidth > container.clientWidth) {
      container.scrollTo({ left: Math.max(0, container.scrollLeft + tr.left - cr.left - cr.width/2 + tr.width/2), behavior: smooth ? "smooth" : "auto" });
    } else {
      container.scrollTo({ top: Math.max(0, container.scrollTop + tr.top - cr.top - cr.height/2 + tr.height/2), behavior: smooth ? "smooth" : "auto" });
    }
  }

  /* ─────────────────────────────────────────
     AUTO-PLAY
  ───────────────────────────────────────── */
  function stopAutoPlay() {
    isAutoPlayingRef.current = false;
    clearTimeout(autoPlayTimer.current);
  }

  function startAutoPlay() {
    isAutoPlayingRef.current = true;
    clearTimeout(autoPlayTimer.current);

    function tick() {
      if (!isAutoPlayingRef.current || gallery.length === 0) return;

      if (isAnimatingRef.current) {
        autoPlayTimer.current = setTimeout(tick, 500);
        return;
      }

      const nextIdx = (displayIndexRef.current + 1) % gallery.length;

      // get the NEXT thumb element from DOM
      const thumbEls = thumbnailsRef.current?.querySelectorAll(".spotlight-thumb");
      const fromEl   = thumbEls ? thumbEls[nextIdx] : null;

      flyAndSwap(nextIdx, fromEl);

      autoPlayTimer.current = setTimeout(tick, 4500);
    }

    autoPlayTimer.current = setTimeout(tick, 3000);
  }

  useEffect(() => {
    if (gallery.length > 0) startAutoPlay();
    return () => { stopAutoPlay(); };
  }, [project.id]);

  /* ─────────────────────────────────────────
     NAV BUTTONS
  ───────────────────────────────────────── */
  function navigate(dir) {
    if (isAnimatingRef.current || gallery.length === 0) return;
    stopAutoPlay();
    const nextIdx  = (displayIndexRef.current + dir + gallery.length) % gallery.length;
    const thumbEls = thumbnailsRef.current?.querySelectorAll(".spotlight-thumb");
    const fromEl   = thumbEls ? thumbEls[nextIdx] : null;
    flyAndSwap(nextIdx, fromEl);
    setTimeout(startAutoPlay, 5000);
  }

  /* ─────────────────────────────────────────
     LIGHTBOX
  ───────────────────────────────────────── */
  function openLightbox(i) { setLightboxIndex(i); setLightboxOpen(true); document.body.style.overflow="hidden"; }
  function closeLightbox()  { setLightboxOpen(false); document.body.style.overflow=""; startAutoPlay(); }

  useEffect(() => {
    function onKey(e) {
      if (lightboxOpen) {
        if (e.key==="Escape")     closeLightbox();
        if (e.key==="ArrowLeft")  setLightboxIndex(p=>(p-1+gallery.length)%gallery.length);
        if (e.key==="ArrowRight") setLightboxIndex(p=>(p+1)%gallery.length);
        return;
      }
      if (e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA") return;
      if (e.key==="ArrowLeft")  navigate(-1);
      if (e.key==="ArrowRight") navigate(1);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  const currentImg = gallery[displayIndex] || {};

  /* ─────────────────────────────────────────
     RENDER
  ───────────────────────────────────────── */
  return (
    <>
      <BreadCrumb pageName="Project Overview" />
      <Hero
        HeroTitlePrefix={project.title}
        HeroTitleSuffix="Overview"
        HeroDescription="Track project progress, milestones, deliverables, and key information in one place."
      />

      <section className="project-detail-section">
        <div className="container">

          {/* HERO IMAGE */}
          <div className="project-hero-image">
            <img src={project.image} alt={project.title} />
            <span className="project-badge">
              <i className="fas fa-rocket me-1"></i> {project.badge || "Featured Project"}
            </span>
            {project.liveUrl && project.liveUrl !== "#" && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-live-link">
                <i className="fas fa-external-link-alt me-2"></i> Live Demo
              </a>
            )}
          </div>

          {/* OVERVIEW */}
          <div className="project-overview">
            <div className="overview-content">
              <span className="section-badge"><i className="fas fa-info-circle me-1"></i> Project Overview</span>
              <h1>{project.title}</h1>
              <div className="project-tags">
                {project.tags?.map((tag, i) => (
                  <span key={i} className={i === 0 ? "highlight" : ""}>{tag}</span>
                ))}
              </div>
              {project.fullDescription?.map((para, i) => <p key={i}>{para}</p>)}
              <div className="project-meta-grid">
                <div className="meta-item"><div className="meta-label">Client</div><div className="meta-value">{project.client}</div></div>
                <div className="meta-item"><div className="meta-label">Timeline</div><div className="meta-value">{project.duration}</div></div>
                {project.budget && <div className="meta-item"><div className="meta-label">Budget</div><div className="meta-value">{project.budget}</div></div>}
              </div>
            </div>

            <div className="project-sidebar">
              <div className="sidebar-title"><i className="fas fa-list-ul me-2"></i> Project Details</div>
              {[
                { icon:"fa-user",         label:"Client",    value: project.client },
                { icon:"fa-calendar-alt", label:"Started",   value: project.started },
                { icon:"fa-clock",        label:"Duration",  value: project.duration },
                { icon:"fa-tag",          label:"Category",  value: project.category },
                project.industry && { icon:"fa-building", label:"Industry", value: project.industry },
              ].filter(Boolean).map((item, i) => (
                <div className="sidebar-item" key={i}>
                  <span className="item-icon"><i className={`fas ${item.icon}`}></i></span>
                  <div><div className="item-label">{item.label}</div><div className="item-value">{item.value}</div></div>
                </div>
              ))}
              {project.liveUrl && project.liveUrl !== "#" && (
                <div className="sidebar-item">
                  <span className="item-icon"><i className="fas fa-globe"></i></span>
                  <div>
                    <div className="item-label">Live URL</div>
                    <div className="item-value">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{color:"#4361ee",textDecoration:"none"}}>
                        {project.liveUrl.replace("https://","")}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* TECH STACK */}
          {project.techStack?.length > 0 && (
            <div className="tech-stack-section">
              <span className="section-badge"><i className="fas fa-microchip me-1"></i> Technology Stack</span>
              <h2 className="section-title">Built With</h2>
              <div className="tech-grid">
                {project.techStack.map((tech, i) => (
                  <span className="tech-item" key={i}>
                    <i className={tech.icon} style={{color:tech.color}}></i> {tech.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CHALLENGE & SOLUTION */}
          {(project.challenge || project.solution) && (
            <div className="challenges-section">
              {project.challenge && (
                <div className="challenge-card">
                  <span className="card-icon"><i className="fas fa-exclamation-triangle"></i></span>
                  <h4>Challenge</h4><p>{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div className="solution-card">
                  <span className="card-icon"><i className="fas fa-lightbulb"></i></span>
                  <h4>Solution</h4><p>{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* GALLERY */}
          {gallery.length > 0 && (
            <div className="gallery-spotlight">
              <span className="section-badge"><i className="fas fa-images me-1"></i> Project Gallery</span>
              <h2 className="section-title">Visual Showcase</h2>
              <p className="text-secondary" style={{marginBottom:"1rem"}}>
                <i className="fas fa-star" style={{color:"#4cc9f0"}}></i> A collection of screenshots and visuals highlighting the project features, UI design, and user experience.
              </p>
              

              <div className="spotlight-container">
                {/* FEATURED */}
                <div
                  className="spotlight-featured"
                  id="spotlightFeatured"
                  onClick={() => { stopAutoPlay(); openLightbox(displayIndex); }}
                >
                  <img src={currentImg.src} alt={currentImg.title || ""} />
                  <div className="featured-overlay">
                    <div className="featured-title">{currentImg.title}</div>
                    <div className="featured-sub">{currentImg.sub}</div>
                  </div>
                  <div className="featured-counter">{displayIndex + 1} / {gallery.length}</div>
                  <button className="featured-nav-btn prev" onClick={e=>{e.stopPropagation();navigate(-1);}}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="featured-nav-btn next" onClick={e=>{e.stopPropagation();navigate(1);}}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>

                {/* THUMBNAILS */}
                <div className="spotlight-thumbnails" ref={thumbnailsRef}>
                  {gallery.map((img, index) => (
                    <div
                      key={index}
                      className={[
                        "spotlight-thumb",
                        index === activeThumb                          ? "active"   : "",
                        index === (activeThumb + 1) % gallery.length  ? "upcoming" : "",
                      ].join(" ").trim()}
                      onClick={e => {
                        if (isAnimatingRef.current) return;
                        stopAutoPlay();
                        flyAndSwap(index, e.currentTarget);
                        setTimeout(startAutoPlay, 5000);
                      }}
                    >
                      <img src={img.src} alt={img.title} loading="lazy" />
                      <span className="thumb-index">{String(index+1).padStart(2,"0")}</span>
                      <span className="thumb-title">{img.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* LIGHTBOX */}
          {lightboxOpen && (
            <div className="lightbox-overlay active" onClick={e=>{if(e.target.classList.contains("lightbox-overlay"))closeLightbox();}}>
              <button className="lightbox-close" onClick={closeLightbox}><i className="fas fa-times"></i></button>
              <div className="lightbox-main">
                <img src={gallery[lightboxIndex]?.src} alt={gallery[lightboxIndex]?.title} />
              </div>
              <div className="lightbox-counter">{lightboxIndex+1} / {gallery.length}</div>
            </div>
          )}

         
          {/* CTA */}
          <div className="project-cta">
            <h3>Ready to Build Something Amazing?</h3>
            <p>Let's discuss how we can create a similar success story for your business.</p>
            <a href="#" className="btn-cta"><i className="fas fa-paper-plane"></i> Start Your Project</a>
          </div>

        </div>
      </section>

       {/* CLIENT TESTIMONIAL */}
{project.testimonial && (
  <section className="project-testimonial">
    <div className="container">
      <div className="testimonial-header text-center">
        <span className="section-badge"><i className="fas fa-images me-1"></i> Client Feedback</span>
              <h2 className="section-title">What the Client Said</h2>
              
      </div>

      <div className="testimonial-box">

        <div className="quote-bg">
          <i className="fas fa-quote-left"></i>
        </div>

        <div className="testimonial-top">

          <div className="client-profile">
            <img
              src={project.testimonial.image}
              alt={project.testimonial.name}
            />

            <div>
              <h4>{project.testimonial.name}</h4>
              <span>{project.testimonial.designation}</span>

              <div className="company">
                <i className="fas fa-building me-2"></i>
                {project.testimonial.company}
              </div>
            </div>
          </div>

          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>

        </div>

        <p className="testimonial-text">
          {project.testimonial.message}
        </p>

        <div className="testimonial-footer">

          <div className="verified">
            <i className="fas fa-circle-check me-2"></i>
            Verified Client
          </div>

          <div className="project-name">
            {project.title}
          </div>

        </div>

      </div>
    </div>
  </section>
)}
    </>
  );
}

export default Project_Detail;