import { useEffect } from "react";
import "./Cta.css";

function Cta({
    badgeName,
    prefix,
    highlight,
    suffix,
    description,
    button1,
    button2,
    trust1,
    trust2,
    trust3,
    bgImage = "./stats.png"
}) {

    useEffect(() => {
        const container = document.getElementById("ctaParticles");
        if (!container) return;

        container.innerHTML = "";

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement("div");
            particle.classList.add("cta-particle");

            const size = Math.random() * 4 + 2;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;

            container.appendChild(particle);
        }
    }, []);

    return (
        <section
            className="cta-animated"
            style={{
                backgroundImage: `linear-gradient(rgba(31, 40, 62, 0.189), rgba(47, 57, 84, 0.452)), url(${bgImage})`
            }}
        >
            <div className="cta-particles" id="ctaParticles"></div>

            <div className="cta-glow-orb"></div>
            <div className="cta-glow-orb2"></div>

            <div className="container">
                <div className="cta-content">

                    {badgeName && (
                        <div className="cta-badge">
                            <i className="fas fa-rocket me-2"></i>
                            {badgeName}
                        </div>
                    )}

                    <h2 className="cta-title">
                        {prefix} <span>{highlight}</span> {suffix}
                    </h2>

                    {description && (
                        <p className="cta-description">
                            {description}
                        </p>
                    )}

                    {(button1 || button2) && (
                        <div className="cta-buttons">

                            {button1 && (
                                <a href="#" className="btn-cta-primary">
                                    <i className="fas fa-paper-plane me-2"></i>
                                    {button1}
                                </a>
                            )}

                            {button2 && (
                                <a href="#" className="btn-cta-secondary">
                                    <i className="fas fa-calendar-alt me-2"></i>
                                    {button2}
                                </a>
                            )}

                        </div>
                    )}

                    {(trust1 || trust2 || trust3) && (
                        <div className="cta-trust">

                            {trust1 && (
                                <div className="trust-item">
                                    <i className="fas fa-check-circle me-2"></i>
                                    {trust1}
                                </div>
                            )}

                            {trust2 && (
                                <div className="trust-item">
                                    <i className="fas fa-lock me-2"></i>
                                    {trust2}
                                </div>
                            )}

                            {trust3 && (
                                <div className="trust-item">
                                    <i className="fas fa-headset me-2"></i>
                                    {trust3}
                                </div>
                            )}

                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}

export default Cta;