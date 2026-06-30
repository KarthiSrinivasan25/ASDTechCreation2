import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Navbar.css";
import { FaWhatsapp } from "react-icons/fa";

// import { FaRocket, FaBolt, FaPalette, FaChartLine } from "react-icons/fa";
import { FaGlobe, FaMobileAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
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
        <a
  href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20build%20a%20website"
  className="cta whatsapp"
  target="_blank"
  rel="noreferrer"
  onClick={closeAll}
>
  <FaWhatsapp style={{ marginRight: "8px" }} />
  WhatsApp
</a>
      </div>
    </>,
    document.body
  );

  return (
    <>
    <div className="topbar">
  {/* LEFT SLIDER */}
  <div className="topbar-left">
    <div className="slider-text">
     <div className="slider-text">
  <span><FaGlobe /> Website Development</span>
  <span><FaMobileAlt /> Mobile App Development</span>
  <span><FaSearch /> SEO Optimization</span>
  <span><FaShoppingCart /> E-Commerce Solutions</span>
</div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="topbar-right">
  <div className="topbar-phones-inline">
    <a href="tel:+918754631713" className="topbar-phone">
      <FaPhoneAlt /> 87546 31713
    </a>

    <span className="phone-sep">|</span>

    <a href="tel:+919876543210" className="topbar-phone">
      <FaPhoneAlt /> 98765 43210
    </a>
  </div>

  <div className="lang-dropdown">
    <select>
      <option value="en">EN</option>
      <option value="ta">TA</option>
    </select>
  </div>
</div>
</div>
    
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
          <a
  href="https://wa.me/918754631713?text=Hi%20I%20want%20to%20build%20a%20website"
  className="cta whatsapp"
  target="_blank"
  rel="noreferrer"
  onClick={closeAll}
>
  <FaWhatsapp style={{ marginRight: "8px" }} />
  WhatsApp
</a>
        </div>

      </nav>

      {mobileDrawer}
    </header>
    </>
   
  );
}

export default Navbar;
