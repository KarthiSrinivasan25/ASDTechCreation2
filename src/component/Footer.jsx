import "./Footer.css";

function Footer() {
  return (
    <footer className="advanced-footer">
      
      {/* Tech Background Effects */}
      <div className="tech-lines"></div>

      <div className="footer-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Animated Border */}
      <div className="footer-top-border"></div>

      <div className="footer-content">
        <div className="container">
          <div className="row g-4 g-lg-5">

            {/* Brand */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">ASDTech Creation</div>

              <p
                className="mt-3 mb-4"
                style={{ lineHeight: "1.6", color: "#94a3b8" }}
              >
                Crafting exceptional digital experiences with cutting-edge
                technology. We help brands scale through innovative web
                solutions.
              </p>

              <div className="social-icons">
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>

                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a href="#" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>

                <a href="#" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>

                <a href="#" className="social-icon">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>

            {/* Explore */}
           <div className="col-lg-2 col-md-6 col-6">
              <h5 className="footer-heading">Explore</h5>

              <ul className="footer-links">
                <li><a href="#"><i className="fas fa-chevron-right"></i> Home</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> About</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> Services</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> Portfolio</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> Careers</a></li>
              </ul>
            </div>

            {/* Resources */}
           <div className="col-lg-2 col-md-6 col-6">
              <h5 className="footer-heading">Resources</h5>

              <ul className="footer-links">
                <li><a href="#"><i className="fas fa-chevron-right"></i> Blog</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> Case Studies</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> Help Center</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> Privacy</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> Terms</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-4 col-md-6">
              <h5 className="footer-heading">Connect</h5>

              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Chennai, Tamil Nadu, India</span>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <a
                  href="mailto:asdtechcreation@gmail.com"
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                  }}
                >
                  asdtechcreation@gmail.com
                </a>
              </div>

              <div className="contact-info-item">
                <i className="fas fa-phone-alt"></i>
                <span>+91 12345 67890</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6 text-md-start text-center mb-2 mb-md-0">
              © 2025 <strong className="text-white">ASD Tech Creation</strong>
              . All Rights Reserved.
            </div>

            <div className="col-md-6 text-md-end text-center">
              <a href="#" className="me-3">Privacy</a>
              <a href="#" className="me-3">Cookies</a>
              <a href="#">Accessibility</a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;