import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const megaRef = useRef(null);
  const location = useLocation();

  // close on route change (IMPORTANT)
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    document.body.style.overflow = "";
  }, [location.pathname]);

  // scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMegaOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // outside click (mega menu)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // outside click (mobile menu hard fix)
  useEffect(() => {
    const handleOutside = (e) => {
      const menu = document.querySelector(".nav-menu");
      const btn = document.querySelector(".hamburger");

      if (
        mobileOpen &&
        menu &&
        !menu.contains(e.target) &&
        !btn.contains(e.target)
      ) {
        setMobileOpen(false);
        setMegaOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setMegaOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMega = (e) => {
    e.preventDefault();
    setMegaOpen((prev) => !prev);
  };

  const isServiceActive =
    location.pathname.startsWith("/service") ||
    location.pathname.startsWith("/web-development") ||
    location.pathname.startsWith("/mobile-apps") ||
    location.pathname.startsWith("/seo");

  return (
    <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">

        {/* LOGO */}
        <NavLink to="/" className="logo" onClick={closeAll}>
          <img src="/asd_logo.png" alt="logo" />
          <span>ASDTech Creation</span>
        </NavLink>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="menu"
        >
          <span></span><span></span><span></span>
        </button>

        {/* NAV MENU */}
        <div className={`nav-menu ${mobileOpen ? "active" : ""}`}>

          <NavLink to="/" onClick={closeAll}>Home</NavLink>
          <NavLink to="/about" onClick={closeAll}>About</NavLink>

          {/* MEGA MENU */}
          <div className="mega-wrapper" ref={megaRef}>

            <NavLink
              to="/service"
              className={`nav-menu mega-link ${isServiceActive ? "active-parent" : ""}`}
              onClick={(e) => {
                toggleMega(e);
              }}
            >
              Services ▾
            </NavLink>

            <div className={`mega-panel ${megaOpen ? "show" : ""} ${mobileOpen ? "mobile" : ""}`}>

              <div className="mega-column">
                <h4>Overview</h4>
                <NavLink to="/service" onClick={closeAll}>All Services</NavLink>
              </div>

              <div className="mega-column">
                <h4>Development</h4>
                <NavLink to="/web-development" onClick={closeAll}>Web Development</NavLink>
                <NavLink to="/mobile-apps" onClick={closeAll}>Mobile Apps</NavLink>
              </div>

              <div className="mega-column">
                <h4>Marketing</h4>
                <NavLink to="/seo" onClick={closeAll}>SEO</NavLink>
              </div>

            </div>
          </div>

          <NavLink to="/portfolio" onClick={closeAll}>Portfolio</NavLink>
          <NavLink to="/career" onClick={closeAll}>Career</NavLink>
          <NavLink to="/contact" onClick={closeAll}>Contact</NavLink>

          <NavLink to="/contact" className="cta" onClick={closeAll}>
            Get Started
          </NavLink>

        </div>
      </nav>

      {/* OVERLAY (IMPORTANT OUTSIDE NAV) */}
      <div
        className={`overlay ${mobileOpen ? "show" : ""}`}
        onClick={closeAll}
      />
    </header>
  );
}

export default Navbar;