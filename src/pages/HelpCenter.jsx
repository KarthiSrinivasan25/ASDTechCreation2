import React from "react";

function HelpCenter() {
  return (
    <section className="container py-5 ">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold">Help Center</h1>
            <p className="text-muted">
              Welcome to the ASDTech Creation Help Center. Find answers to
              common questions about our Website Development, Mobile App
              Development, and SEO Optimization services.
            </p>
          </div>

          {/* Getting Started */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h3 className="fw-bold mb-3">Getting Started</h3>

              <p>
                We make it simple for businesses and individuals to transform
                their ideas into high-quality digital products.
              </p>

              <ol>
                <li>Contact us with your project requirements.</li>
                <li>Discuss your ideas with our development team.</li>
                <li>Receive a detailed quotation.</li>
                <li>Approve the proposal and timeline.</li>
                <li>Development begins.</li>
                <li>Testing & Quality Assurance.</li>
                <li>Final Delivery & Support.</li>
              </ol>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-5">
            <h2 className="fw-bold text-center mb-4">
              Frequently Asked Questions
            </h2>

            <div className="accordion" id="faqAccordion">

              {/* FAQ 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    How do I request a quotation?
                  </button>
                </h2>

                <div
                  id="faq1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Simply visit our Contact page and share your project
                    requirements. Our team will review your requirements and
                    provide a customized quotation.
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    What services do you provide?
                  </button>
                </h2>

                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>Website Development</li>
                      <li>Responsive Web Design</li>
                      <li>E-Commerce Development</li>
                      <li>Mobile App Development</li>
                      <li>SEO Optimization</li>
                      <li>Website Maintenance</li>
                      <li>UI/UX Design</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    How long does website development take?
                  </button>
                </h2>

                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Development time depends on project complexity.
                    <ul className="mt-3">
                      <li>Landing Page : 3–7 Days</li>
                      <li>Business Website : 1–3 Weeks</li>
                      <li>E-Commerce Website : 3–8 Weeks</li>
                      <li>Custom Web Application : Based on requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    Do you develop Android and iOS apps?
                  </button>
                </h2>

                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes. We develop modern mobile applications for Android and
                    cross-platform solutions depending on your business
                    requirements.
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq5"
                  >
                    What SEO services do you provide?
                  </button>
                </h2>

                <div
                  id="faq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We provide:
                    <ul className="mt-2">
                      <li>Technical SEO</li>
                      <li>On-Page SEO</li>
                      <li>Website Speed Optimization</li>
                      <li>Meta Tags Optimization</li>
                      <li>Keyword Optimization</li>
                      <li>Google Search Console Setup</li>
                      <li>Sitemap & Robots.txt</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq6"
                  >
                    Do you provide website maintenance?
                  </button>
                </h2>

                <div
                  id="faq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes. We provide regular maintenance including security
                    updates, bug fixes, performance optimization, backups, and
                    feature enhancements.
                  </div>
                </div>
              </div>

              {/* FAQ 7 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq7"
                  >
                    Will my website be mobile-friendly?
                  </button>
                </h2>

                <div
                  id="faq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Absolutely. Every website we build is fully responsive and
                    optimized for desktop, tablet, and mobile devices.
                  </div>
                </div>
              </div>

              {/* FAQ 8 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq8"
                  >
                    How can I contact your support team?
                  </button>
                </h2>

                <div
                  id="faq8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Email:</strong> asdtechcreation@gmail.com
                    <br />
                    <strong>Location:</strong> Salem, Tamil Nadu, India
                    <br />
                    <strong>Support:</strong> Monday – Saturday
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Support Section */}
          <div className="card bg-primary text-white border-0 shadow">
            <div className="card-body text-center p-5">
              <h2 className="fw-bold mb-3">
                Still Need Help?
              </h2>

              <p className="mb-4">
                Our team is always ready to help you with your website,
                mobile app, and SEO requirements.
              </p>

              <a
                href="/contact"
                className="btn btn-light btn-lg px-4"
              >
                Contact Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HelpCenter;