import { useEffect, useState } from "react";

function ContactForm() {
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Generate CAPTCHA
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

   useEffect(() => {
    if (successMsg) {
      alert("Thank you! We will get back to you within 24 hours.");
    }
  }, [successMsg]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputCaptcha !== captcha) {
      setCaptchaError(true);
      setSuccessMsg(false);
      return;
    }

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setCaptchaError(false);
    setSuccessMsg(true);

    // Reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setInputCaptcha("");
    generateCaptcha();

    // Hide success message after 5 sec
    setTimeout(() => setSuccessMsg(false), 5000);

    setSuccessMsg(true);
  };

   

  return (
    <div className="col-lg-7">
      <div className="form-card-premium">
        <div className="form-title-premium">Send a Message</div>
        <div className="form-subtitle-premium">
          Fill out the form and our team will get back to you within 24 hours.
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">

            <div className="col-md-6">
              <div className="input-premium">
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-premium">
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-premium">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-premium">
                <select
                  id="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="ecommerce">E-Commerce Solutions</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="input-premium">
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* CAPTCHA */}
          <div className="captcha-row">
            <div className="captcha-image-box">
              <span className="captcha-text">{captcha}</span>
            </div>

            <div className="captcha-input">
              <input
                type="text"
                placeholder="Enter CAPTCHA"
                value={inputCaptcha}
                onChange={(e) => setInputCaptcha(e.target.value)}
              />
            </div>

            <div
              className="captcha-refresh"
              onClick={generateCaptcha}
              style={{ cursor: "pointer" }}
            >
              🔄
            </div>

            <button type="submit" className="btn-submit-premium">
              Send Message
            </button>
          </div>

          {/* Error */}
          {captchaError && (
            <div className="captcha-error">
              Invalid CAPTCHA. Please try again.
            </div>
          )}


          {/* Success */}
        
        </form>
      </div>
    </div>
  );
}

export default ContactForm