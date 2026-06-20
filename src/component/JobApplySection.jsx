import { useState } from "react";
import './JobApplySection.css'

 function JobApplySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    portfolio: "",
    message: "",
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for your application! Our HR team will review your profile and get back to you within 5-7 business days."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      portfolio: "",
      message: "",
      resume: null
    });

    e.target.reset();
  };

  return (
    <section className="apply-section" id="applySection">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="apply-card">

              {/* HEADER */}
              <div className="text-center mb-4">
                <span className="section-badge">
                  <i className="fas fa-file-alt me-1"></i> Apply Now
                </span>
                <h2 className="section-title">Submit Your Application</h2>
                <p className="text-secondary">
                  Fill out the form below and we'll get back to you
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control-custom"
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control-custom"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="tel"
                      className="form-control-custom"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <select
                      className="form-select-custom"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Position
                      </option>
                      <option>Senior Full-Stack Developer</option>
                      <option>Mobile App Developer</option>
                      <option>UI/UX Designer</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control-custom"
                      placeholder="Portfolio / GitHub / LinkedIn URL"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control-custom"
                      rows="4"
                      placeholder="Why do you want to join ASDTech Creation?"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <input
                      type="file"
                      className="form-control-custom"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                    />
                    <small className="text-muted">
                      Upload your resume (PDF, DOC)
                    </small>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn-apply">
                      <i className="fas fa-paper-plane me-2"></i>
                      Submit Application
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobApplySection