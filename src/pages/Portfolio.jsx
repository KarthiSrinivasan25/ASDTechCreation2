import { useState, useEffect } from "react";
import BreadCrumb from "../component/BreadCrumb";
import Hero from "../component/Hero";
import PortfolioCard from "../component/PortfolioCard";
import projects from "../api_js/script";
import "./Portfolio.css";
import GallerySection from "../component/GallerySection";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when lightbox opens
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <BreadCrumb pageName="Career" />

      <Hero
        HeroTitlePrefix="Where Creativity Meets Code"
        HeroTitleSuffix="Meets Code"
        HeroDescription="We design and build digital products that users love. Explore our finest work — from immersive web apps to mobile-first experiences."
      />

      {/* PROJECT GRID */}
      <section className="portfolio-preview" style={{
                  backgroundColor:
                    "#eef2ff"
                }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <i className="fas fa-trophy me-1"></i> Our Best Work
            </span>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="row g-5">
            {projects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <PortfolioCard
                  project={project}
                  onPreview={setSelectedProject}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedProject && (
        <div
          className="lightbox-overlay active"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              className="lightbox-close"
              onClick={() => setSelectedProject(null)}
            >
              <i className="fas fa-times"></i>
            </button>

            {/* TITLE */}
            <div className="lightbox-title">
              {selectedProject?.title}
            </div>

            {/* IMAGES */}
            <div className="lightbox-grid">
              {selectedProject?.gallery?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedProject.title}-${i}`}
                  loading="lazy"
                />
              ))}
            </div>

            {/* COUNTER */}
            <div className="lightbox-counter">
              {selectedProject?.gallery?.length || 0} Images
            </div>
          </div>
        </div>
      )}


      <GallerySection />
    </>
  );
}

export default Portfolio;



// PORTFOLIO PAGE CONTENT (ORDERWISE)
// 🥇 1. Hero Section (Top Intro)

// Title:

// Our Work That Builds Digital Success

// Subtitle:

// We design and develop modern, fast, and scalable websites for businesses of all sizes.

// Short line:

// Explore some of our best projects that deliver real results.

// 🥈 2. Featured Projects Section

// Heading:

// Featured Projects

// Intro line:

// Here are some of our recently completed high-quality projects.

// Each Project Card Format:

// Project Name
// Industry (e.g. Restaurant, E-commerce, Portfolio)
// Short description (1–2 lines)
// Technologies used
// Live Demo button
// View Case Study button
// 🥉 3. Case Study Section

// Heading:

// Case Studies

// Template (use for each project):

// Project Name

// Client Goal:

// Client wanted a modern website to improve online presence and generate leads.

// Our Solution:

// We built a fully responsive, SEO-friendly website with optimized UI/UX.

// Technologies Used:

// HTML, CSS, JavaScript / React / WordPress (based on project)

// Results:

// Improved user engagement, faster loading speed, and better conversions.

// 4. Project Gallery / Screenshots

// Heading:

// UI Showcase

// Text:

// A glimpse of our design quality across desktop and mobile devices.

// (Here add images of projects)

// 5. Technologies Section

// Heading:

// Technologies We Use

// List:

// HTML5 / CSS3
// JavaScript
// React / Next.js
// WordPress
// PHP / Node.js
// UI/UX Design (Figma)
// 6. Results Section (Impact)

// Heading:

// Business Impact

// Points:

// Faster website performance
// SEO-friendly structure
// Increased customer inquiries
// Mobile responsive designs
// Improved user experience
// 7. CTA Section (Bottom)

// Heading:

// Have a Project in Mind?

// Text:

// Let’s build something great together. We turn your ideas into powerful digital solutions.

// Button:

// Contact Us

// 🔥 FINAL FLOW (IMPORTANT ORDER)
// Hero Intro
// Featured Projects
// Case Studies
// UI Gallery
// Technologies
// Results / Impact
// Contact CTA