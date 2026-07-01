import { useState } from "react";

function SmartModal({ show, onClose, popupType, bgImage = "./bread.jpg" }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    if (!show) return null;

    return (
        <div className="smart-modal-overlay" onClick={onClose}>
            <div className="smart-modal" onClick={(e) => e.stopPropagation()}>

                {/* LEFT SIDE */}
                <div className="smart-left"  style={{
                backgroundImage: `linear-gradient(rgba(31,40,62,0.2), rgba(47,57,84,0.4)), url(${bgImage})`
            }}>
                    <div className="smart-bg-overlay"></div>

                    <div className="smart-top-row">
                        <div className="smart-badge">
                            ASDTech Creation - Premium Solution
                        </div>
                    </div>

                    <h2>
                        {popupType === "primary"
                            ? "Turn Your Idea Into Reality"
                            : "Let’s Build Something Great"}
                    </h2>

                    <p>
                        We combine design, technology and strategy to build high-performing digital products.
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
                <div className="smart-right">
                    <button className="smart-close" onClick={onClose}>
                        ×
                    </button>

                    <h3>Get in Touch</h3>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                        }
                    />

                    <select
                        value={formData.service}
                        onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                        }
                    >
                        <option value="">Select Service</option>
                        <option value="web">Website Development</option>
                        <option value="app">App Development</option>
                        <option value="seo">SEO</option>
                    </select>

                    <textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                    />

                    <button className="smart-btn">
                        Submit Request
                    </button>
                </div>

            </div>
        </div>
    );
}

export default SmartModal;