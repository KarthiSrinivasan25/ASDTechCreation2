import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [desktopMega, setDesktopMega] = useState(false);
  const [mobileMega,  setMobileMega]  = useState(false);
  const [scrolled, setScrolled]       = useState(false);

  const desktopMegaRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMega(false);
    setMobileMega(false);
    document.body.style.overflow = "";
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setDesktopMega(false);
        setMobileMega(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // outside click only for desktop mega
  useEffect(() => {
    if (!desktopMega) return;
    const onOutside = (e) => {
      if (desktopMegaRef.current && !desktopMegaRef.current.contains(e.target)) {
        setDesktopMega(false);
      }
    };
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", onOutside);
    }, 0);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", onOutside);
    };
  }, [desktopMega]);

  const closeAll = () => {
    setMobileOpen(false);
    setDesktopMega(false);
    setMobileMega(false);
  };

  const isServiceActive =
    location.pathname.startsWith("/service") ||
    location.pathname.startsWith("/service/web") ||
    location.pathname.startsWith("/service/mobile") ||
    location.pathname.startsWith("/service/seo");

  const MegaPanel = ({ show }) => (
    <div className={`mega-panel ${show ? "show" : ""}`}>
      <div className="mega-column">
        <h4>Overview</h4>
        <NavLink to="/service" onClick={closeAll}>All Services</NavLink>
      </div>
      <div className="mega-column">
        <h4>Development</h4>
        <NavLink to="/service/web" onClick={closeAll}>Web Development</NavLink>
        <NavLink to="/service/mobile"     onClick={closeAll}>Mobile Apps</NavLink>
      </div>
      <div className="mega-column">
        <h4>Marketing</h4>
        <NavLink to="/service/seo" onClick={closeAll}>SEO</NavLink>
      </div>
    </div>
  );

  const mobileDrawer = createPortal(
    <>
      {/* OVERLAY */}
      <div
        className={`overlay ${mobileOpen ? "show" : ""}`}
        onClick={closeAll}
        aria-hidden="true"
      />

      {/* DRAWER */}
      <div
        className={`nav-menu mobile-drawer ${mobileOpen ? "active" : ""}`}
        aria-hidden={!mobileOpen}
      >
        {/* DRAWER HEADER: logo + close button */}
        <div className="drawer-header">
          <NavLink to="/" className="drawer-logo" onClick={closeAll}>
            <img src="/asd_logo.png" alt="logo" />
            <span>ASDTech Creation</span>
          </NavLink>
          <button className="drawer-close" onClick={closeAll} aria-label="Close menu">
            <span className="drawer-close-icon">✕</span>
          </button>
        </div>

        <NavLink to="/"      onClick={closeAll}>Home</NavLink>
        <NavLink to="/about" onClick={closeAll}>About</NavLink>

        <div className="mega-wrapper">
          <button
            className={`mega-trigger ${isServiceActive ? "active-parent" : ""} ${mobileMega ? "mega-open" : ""}`}
            onClick={() => setMobileMega((p) => !p)}
            aria-expanded={mobileMega}
          >
            Services <span className="mega-arrow">▾</span>
          </button>
          <MegaPanel show={mobileMega} />
        </div>

        <NavLink to="/portfolio" onClick={closeAll}>Portfolio</NavLink>
        <NavLink to="/career"    onClick={closeAll}>Career</NavLink>
        <NavLink to="/contact"   onClick={closeAll}>Contact</NavLink>
        <NavLink to="/contact" className="cta" onClick={closeAll}>Get Started</NavLink>
      </div>
    </>,
    document.body
  );

  return (
    <header className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">

        <NavLink to="/" className="logo" onClick={closeAll}>
          <img src="/asd_logo.png" alt="logo" />
          <span>ASDTech Creation</span>
        </NavLink>

        {/* HAMBURGER — always visible on mobile, sits above drawer via z-index */}
        <button
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span></span><span></span><span></span>
        </button>

        {/* DESKTOP NAV */}
        <div className="nav-menu desktop-only">
          <NavLink to="/"      onClick={closeAll}>Home</NavLink>
          <NavLink to="/about" onClick={closeAll}>About</NavLink>

          <div className="mega-wrapper" ref={desktopMegaRef}>
            <button
              className={`mega-trigger ${isServiceActive ? "active-parent" : ""} ${desktopMega ? "mega-open" : ""}`}
              onClick={() => setDesktopMega((p) => !p)}
              aria-expanded={desktopMega}
            >
              Services <span className="mega-arrow">▾</span>
            </button>
            <MegaPanel show={desktopMega} />
          </div>

          <NavLink to="/portfolio" onClick={closeAll}>Portfolio</NavLink>
          <NavLink to="/career"    onClick={closeAll}>Career</NavLink>
          <NavLink to="/contact"   onClick={closeAll}>Contact</NavLink>
          <NavLink to="/contact" className="cta" onClick={closeAll}>Get Started</NavLink>
        </div>

      </nav>

      {mobileDrawer}
    </header>
  );
}

export default Navbar;
