import React from "react";

function CookiesPolicy() {
  return (
    <section className="container py-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold display-5">Cookies Policy</h1>

            <p className="text-muted">
              <strong>Last Updated:</strong> July 1, 2026
            </p>

            <p className="lead">
              This Cookies Policy explains how <strong>ASDTech Creation</strong>
              uses cookies and similar technologies to improve your browsing
              experience and enhance the performance of our website.
            </p>
          </div>

          {/* Card 1 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-cookie-bite text-warning me-2"></i>
                What Are Cookies?
              </h3>

              <p className="mb-0">
                Cookies are small text files stored on your computer, tablet,
                or mobile device when you visit a website. They help websites
                remember your preferences and improve your browsing experience.
              </p>

            </div>
          </div>

          {/* Card 2 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-bullseye text-primary me-2"></i>
                Why We Use Cookies
              </h3>

              <ul className="mb-0">
                <li>Improve website performance.</li>
                <li>Remember your preferences.</li>
                <li>Analyze visitor traffic.</li>
                <li>Measure SEO performance.</li>
                <li>Enhance user experience.</li>
                <li>Improve website security.</li>
                <li>Optimize page loading speed.</li>
              </ul>

            </div>
          </div>

          {/* Card 3 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-layer-group text-success me-2"></i>
                Types of Cookies We Use
              </h3>

              <ul className="mb-0">
                <li><strong>Essential Cookies</strong> – Required for website functionality.</li>
                <li><strong>Performance Cookies</strong> – Help improve website speed and stability.</li>
                <li><strong>Analytics Cookies</strong> – Collect anonymous visitor statistics.</li>
                <li><strong>Functional Cookies</strong> – Remember your settings and preferences.</li>
              </ul>

            </div>
          </div>

          {/* Card 4 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-sliders-h text-info me-2"></i>
                Managing Cookies
              </h3>

              <p className="mb-0">
                Most web browsers allow you to control or disable cookies
                through browser settings. Please note that disabling cookies may
                affect certain website features and reduce your browsing
                experience.
              </p>

            </div>
          </div>

          {/* Card 5 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-globe text-secondary me-2"></i>
                Third-Party Cookies
              </h3>

              <p className="mb-0">
                We may use trusted third-party services such as Google Analytics
                and Google Search Console to understand website performance and
                improve our services. These providers may place cookies in
                accordance with their own privacy policies.
              </p>

            </div>
          </div>

          {/* Card 6 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-sync-alt text-danger me-2"></i>
                Changes to This Policy
              </h3>

              <p className="mb-0">
                We may update this Cookies Policy from time to time to reflect
                changes in technology, legal requirements, or our business
                practices. Any updates will be published on this page.
              </p>

            </div>
          </div>

          {/* Contact Card */}
          <div className="card bg-primary text-white border-0 shadow-lg">
            <div className="card-body text-center p-5">

              <i className="fas fa-envelope-open-text fa-3x mb-3"></i>

              <h2 className="fw-bold mb-3">
                Contact Us
              </h2>

              <p className="mb-4">
                If you have any questions regarding our Cookies Policy,
                please contact us.
              </p>

              <h5>ASDTech Creation</h5>

              <p className="mb-2">
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

export default CookiesPolicy;