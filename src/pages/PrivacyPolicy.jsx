import React from "react";

function PrivacyPolicy() {
  return (
    <section className="container py-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold display-5">Privacy Policy</h1>
            <p className="text-muted">
              <strong>Last Updated:</strong> July 1, 2026
            </p>
            <p className="lead">
              Your privacy is important to us. This Privacy Policy explains how
              ASDTech Creation collects, uses, stores, and protects your
              personal information.
            </p>
          </div>

          {/* Card 1 */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">
                <i className="fas fa-user-shield text-primary me-2"></i>
                Information We Collect
              </h3>

              <p>We may collect the following information:</p>

              <ul className="mb-0">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Company Name</li>
                <li>Project Requirements</li>
                <li>Website URL</li>
                <li>Contact Form Details</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">
                <i className="fas fa-laptop-code text-success me-2"></i>
                Services We Provide
              </h3>

              <ul className="mb-0">
                <li>Website Development</li>
                <li>Mobile App Development</li>
                <li>SEO Optimization</li>
                <li>Website Maintenance</li>
                <li>UI / UX Design</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">
                <i className="fas fa-database text-warning me-2"></i>
                How We Use Your Information
              </h3>

              <ul className="mb-0">
                <li>Respond to inquiries.</li>
                <li>Create project quotations.</li>
                <li>Develop websites and mobile applications.</li>
                <li>Provide SEO services.</li>
                <li>Improve customer support.</li>
                <li>Improve website performance.</li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">
                <i className="fas fa-lock text-danger me-2"></i>
                Data Protection
              </h3>

              <p className="mb-0">
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, or misuse.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">
                <i className="fas fa-cookie-bite text-info me-2"></i>
                Cookies
              </h3>

              <p className="mb-0">
                We use cookies to improve website functionality, analyze
                traffic, enhance user experience, and optimize website
                performance.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">
                <i className="fas fa-globe text-primary me-2"></i>
                Third-Party Services
              </h3>

              <p className="mb-0">
                Our website may use Google Analytics, Google Search Console,
                hosting providers, and other trusted third-party services to
                improve performance and user experience.
              </p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">
                <i className="fas fa-scale-balanced text-success me-2"></i>
                Your Rights
              </h3>

              <ul className="mb-0">
                <li>Request access to your data.</li>
                <li>Correct inaccurate information.</li>
                <li>Request data deletion.</li>
                <li>Withdraw consent where applicable.</li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="card bg-primary text-white border-0 shadow-lg">
            <div className="card-body text-center p-5">

              <i className="fas fa-headset fa-3x mb-3"></i>

              <h2 className="fw-bold">Contact Us</h2>

              <p className="mb-4">
                If you have any questions regarding this Privacy Policy,
                please feel free to contact us.
              </p>

              <h5>ASDTech Creation</h5>

              <p className="mb-1">
                <i className="fas fa-map-marker-alt me-2"></i>
                Salem, Tamil Nadu, India
              </p>

              <p className="mb-0">
                <i className="fas fa-envelope me-2"></i>
                asdtechcreation@gmail.com
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;