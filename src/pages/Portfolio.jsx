import { useState, useEffect, useCallback, useRef } from "react";
import "./Portfolio.css";
import SEO from '../component/SEO';
import BreadCrumb from "../component/BreadCrumb";
import Hero from "../component/Hero";
import PortfolioCard from "../component/PortfolioCard";
import projects from "../api_js/script";

import GallerySection from "../component/GallerySection";
import TechnologiesSection from "../component/TechnologiesSection";
import StatsCompact from "../component/StatsCompact";
import Testimonial from "../component/Testinomial";
import Cta from "../component/Cta";

/* ─── INLINE SVG ICONS (no extra dependency) ─── */
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const IconDownload = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const IconShare = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const IconExpand = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

/* ─── LIGHTBOX COMPONENT ─── */
function Lightbox({ project, onClose }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState({});
  const stripRef = useRef(null);
  const total = project.gallery?.length || 0;

  const goTo = useCallback(
    (i) => {
      const idx = ((i % total) + total) % total;
      setCurrent(idx);
      setTimeout(() => {
        const el = stripRef.current?.children[idx];
        if (el) el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }, 50);
    },
    [total]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(current + 1);
      if (e.key === "ArrowLeft") goTo(current - 1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, goTo, onClose]);

  if (!project || total === 0) return null;

  return (


    <div className="lb-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${project.title} gallery`}>
      <div className="lb-panel" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="lb-header">
          <div className="lb-header-left">
            <span className="lb-badge">Gallery</span>
            <span className="lb-title">{project.title}</span>
          </div>
          <button className="lb-close-btn" onClick={onClose} aria-label="Close gallery">
            <IconX />
          </button>
        </div>

        {/* FEATURED IMAGE */}
        <div className="lb-featured-wrap">
          <button className="lb-nav lb-nav-prev" onClick={() => goTo(current - 1)} aria-label="Previous">
            <IconLeft />
          </button>

          <div className="lb-featured">
            {!loaded[current] && <div className="lb-skeleton" />}
            <img
              key={current}
              src={project.gallery[current]}
              alt={`${project.title} ${current + 1}`}
              className="lb-featured-img"
              style={{ opacity: loaded[current] ? 1 : 0 }}
              onLoad={() => setLoaded((p) => ({ ...p, [current]: true }))}
            />
            <span className="lb-counter">{current + 1} / {total}</span>
            <button
              className="lb-expand-btn"
              onClick={() => window.open(project.gallery[current], "_blank")}
              aria-label="Open full size"
            >
              <IconExpand />
            </button>
          </div>

          <button className="lb-nav lb-nav-next" onClick={() => goTo(current + 1)} aria-label="Next">
            <IconRight />
          </button>
        </div>

        {/* THUMBNAIL STRIP */}
        <div className="lb-strip" ref={stripRef} role="list">
          {project.gallery.map((img, i) => (
            <div
              key={i}
              role="listitem"
              className={`lb-thumb${i === current ? " lb-thumb-active" : ""}`}
              onClick={() => goTo(i)}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && goTo(i)}
              aria-label={`Image ${i + 1}`}
              aria-current={i === current}
            >
              <img src={img} alt="" loading="lazy" />
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="lb-footer">
          <div className="lb-meta">
            <span className="lb-meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
              {total} images
            </span>
            {project.year && (
              <span className="lb-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                {project.year}
              </span>
            )}
            {project.views && (
              <span className="lb-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                {project.views}
              </span>
            )}
          </div>
          <div className="lb-actions">
            <button className="lb-btn">
              <IconShare /> Share
            </button>
            <button className="lb-btn lb-btn-primary">
              <IconDownload /> Download
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── PORTFOLIO PAGE ─── */
function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SEO
        title="Portfolio | ASDTech Creation"
        description="View our portfolio showcasing successful website development, mobile applications, eCommerce projects, and digital solutions delivered to our clients."
        keywords="ASDTech Portfolio, Website Projects, Mobile App Projects, eCommerce Projects"
      />


      <BreadCrumb pageName="Portfolio" />

      <Hero
        HeroTitlePrefix="Where Creativity Meets Code"
        HeroTitleSuffix="Meets Code"
        HeroDescription="We design and build digital products that users love. Explore our finest work — from immersive web apps to mobile-first experiences."
      />


      <section className="portfolio-success-section">
        <div className="floating-particles2">
          <div className="particle">
            <img src="/web.png" alt="Web Dev" />
          </div>

          <div className="particle">
            <img src="/android.png" alt="Android" />
          </div>

          <div className="particle">
            <img src="/ecommerce.png" alt="Ecommerce" />
          </div>

          <div className="particle">
            <img src="/seo.png" alt="SEO" />
          </div>

          <div className="particle">
            <img src="/code.png" alt="Development" />
          </div>
        </div>

        <div className="container">


          <div className="text-center mb-4">
            <span className="section-badge"><i className="fas fa-star me-1"></i> Our Portfolio</span>
            <h2 className="section-title">Crafting Digital <span  >Success Stories</span></h2>
          </div>


          <div className="success-story-hero">
            <div className="para-bg-animation">
              <div className="gradient-orb orb-1"></div>
              <div className="gradient-orb orb-2"></div>
              <div className="gradient-orb orb-3"></div>
            </div>
            <div className="shimmer-line"></div>

            <div className="hero-glow"></div>
            <span className="deco-quote left">"</span>
            <span className="deco-quote right">"</span>


            <p>
              Our portfolio showcases the <span className="highlight-text">passion, creativity, and technical expertise</span> we bring to every project. From <span className="animated-underline">modern business websites</span> and <span className="animated-underline">e-commerce platforms</span> to <span className="animated-underline">custom web applications</span> and <span className="animated-underline">mobile solutions</span>, each project reflects our commitment to delivering <span className="highlight-text">high-quality digital experiences</span>. We work closely with our clients to understand their goals, solve <span className="animated-underline">real business challenges</span>, and build solutions that are <span className="highlight-text">scalable, user-friendly, and results-driven</span>. Every project is a testament to our dedication to <span className="animated-underline">innovation</span>, <span className="animated-underline">performance</span>, and creating <span className="highlight-text">lasting value for our clients</span>.
            </p>



            <div className="hero-quote">
              <i className="fas fa-quote-left me-2"></i>
              We believe in building long-term partnerships with our clients. Our success is measured by the
              success of the businesses we serve.
              <i className="fas fa-quote-right ms-2"></i>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="portfolio-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <i className="fas fa-trophy me-1"></i> Our Best Work
            </span>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <PortfolioCard project={project} onPreview={setSelectedProject} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedProject && (
        <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

     
      <TechnologiesSection />
 <GallerySection />
      <StatsCompact
        badge="Measurable Impact"
        title="Results That Speak for Themselves"
        description="We deliver tangible results that drive growth, efficiency, and success for our clients."
      />

      <Testimonial />

      <Cta
        badgeTitle="Explore Our Work"
        prefix="Like What You"
        highlight="See"
        suffix="in Our Portfolio?"
        description="We design and develop high-performance websites and digital products that combine creativity with real business results. Let's build something even better for your brand."
        button2="Start Your Project"
      />
    </>
  );
}

export default Portfolio;