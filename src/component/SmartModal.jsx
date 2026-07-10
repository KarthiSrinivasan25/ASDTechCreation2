import { useEffect, useState } from "react";

const MAIL_ENDPOINT =
  "https://karthikeyanportfolio.helioho.st/api/send-mail.php";

function SmartModal({
  show,
  onClose,
  popupType,
  bgImage = "./bread.jpg",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    if (successMsg) {
      alert("Thank you! We will get back to you within 24 hours.");
      setSuccessMsg(false);
    }
  }, [successMsg]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitError("");

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(MAIL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.message || "Failed to send message.");
      }

      setSuccessMsg(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      onClose();
    } catch (err) {
      setSubmitError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div className="smart-modal-overlay" onClick={onClose}>
      <div
        className="smart-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT SIDE */}
        <div
          className="smart-left"
          style={{
            backgroundImage: `linear-gradient(rgba(31,40,62,0.2), rgba(47,57,84,0.4)), url(${bgImage})`,
          }}
        >
          <div className="smart-bg-overlay"></div>

          <div className="smart-top-row">
            <div className="smart-badge">
              ASDTech Creation - Premium Solution
            </div>
          </div>

          <h2>
            {popupType === "primary"
              ? "Turn Your Idea Into Reality"
              : "Let's Build Something Great"}
          </h2>

          <p>
            We combine design, technology and strategy to build
            high-performing digital products.
          </p>

          <div className="smart-features">
            <div className="feature-card1">
              <i className="fas fa-bolt"></i>
              <span>High Performance Systems</span>
            </div>

            <div className="feature-card1">
              <i className="fas fa-layer-group"></i>
              <span>Modern UI/UX Design</span>
            </div>

            <div className="feature-card1">
              <i className="fas fa-shield-alt"></i>
              <span>Secure Architecture</span>
            </div>
          </div>

          <div className="smart-footer-note">
            Trusted by startups & growing businesses
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="smart-right" onSubmit={handleSubmit}>
          <button
            type="button"
            className="smart-close"
            onClick={onClose}
          >
            ×
          </button>

          <h3>Get in Touch</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option value="Web Development">
              Website Development
            </option>
            <option value="Mobile App Development">
              App Development
            </option>
            <option value="SEO">SEO</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="smart-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Request"}
          </button>

          {submitError && (
            <div
              style={{
                color: "#dc3545",
                marginTop: "12px",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {submitError}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SmartModal;