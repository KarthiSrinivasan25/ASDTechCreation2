import React from "react";

function Accessibility() {
  return (
    <section className="container py-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold display-5">Accessibility Statement</h1>

            <p className="text-muted">
              <strong>Last Updated:</strong> July 1, 2026
            </p>

            <p className="lead">
              At <strong>ASDTech Creation</strong>, we are committed to providing
              an accessible and inclusive digital experience for all users,
              regardless of their abilities or the technologies they use.
            </p>
          </div>

          {/* Card 1 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-universal-access text-primary me-2"></i>
                Our Commitment
              </h3>

              <p className="mb-0">
                We continuously work to improve the accessibility and usability
                of our website by following modern web accessibility practices
                and making our services available to everyone.
              </p>

            </div>
          </div>

          {/* Card 2 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-check-circle text-success me-2"></i>
                Accessibility Features
              </h3>

              <ul className="mb-0">
                <li>Responsive website design.</li>
                <li>Keyboard-friendly navigation.</li>
                <li>Readable typography.</li>
                <li>Proper heading structure.</li>
                <li>Alternative text for images.</li>
                <li>Fast-loading pages.</li>
                <li>High-quality color contrast.</li>
                <li>Mobile-friendly layouts.</li>
                <li>Easy-to-read content.</li>
              </ul>

            </div>
          </div>

          {/* Card 3 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-laptop text-info me-2"></i>
                Browser Compatibility
              </h3>

              <p>
                Our website is designed to work with the latest versions of
                modern web browsers.
              </p>

              <ul className="mb-0">
                <li>Google Chrome</li>
                <li>Microsoft Edge</li>
                <li>Mozilla Firefox</li>
                <li>Safari</li>
                <li>Opera</li>
              </ul>

            </div>
          </div>

          {/* Card 4 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-tools text-warning me-2"></i>
                Continuous Improvement
              </h3>

              <p className="mb-0">
                Accessibility is an ongoing process. We regularly review and
                improve our website to ensure compatibility with evolving
                accessibility standards, devices, and assistive technologies.
              </p>

            </div>
          </div>

          {/* Card 5 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h3 className="fw-bold mb-3">
                <i className="fas fa-headset text-danger me-2"></i>
                Need Assistance?
              </h3>

              <p>
                If you experience any accessibility issues while using our
                website or require assistance accessing any content, please
                contact us. We value your feedback and will make every effort to
                provide an accessible experience.
              </p>

            </div>
          </div>

          {/* Contact Card */}
          <div className="card bg-primary border-0 shadow-lg text-white">
            <div className="card-body text-center p-5">

              <i className="fas fa-envelope-open-text fa-3x mb-3"></i>

              <h2 className="fw-bold mb-3">
                Contact Us
              </h2>

              <p className="mb-4">
                For accessibility questions or suggestions, feel free to reach
                out to us.
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

export default Accessibility;