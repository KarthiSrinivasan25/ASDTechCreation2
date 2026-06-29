import './Service.css'
import BreadCrumb from "../component/BreadCrumb"
import Hero from "../component/Hero"
import PortfolioPreviewCard from '../component/PortfolioPreviewCard'
import Testimonial from '../component/Testinomial'
import OurWorkFlow from '../component/OurWorkFlow'
import ServicesCards from '../component/ServicesCards'
import React from "react";
import { Link } from "react-router-dom";
import SEO from '../component/SEO';

function Service() {
    return (

        <>
        <SEO
  title="Our Services | ASDTech Creation"
  description="Explore our professional services including website development, mobile app development, SEO services, eCommerce website development, and custom software solutions."
  keywords="Website Development Services, Mobile App Development Services, SEO Services, eCommerce Development, Software Development Services"
/>



            <BreadCrumb pageName="Service" />

            <Hero HeroTitlePrefix="Smart Digital Solutions for" HeroTitleSuffix="Modern Businesses" HeroDescription="We build fast, scalable, and user-friendly digital products that help your business grow in the digital world." />

            <section className="why-choose-advanced">
                <div className="container">
                    <div className="text-center mb-4">
                        <span className="section-badge"><i className="fas fa-star me-1"></i> Why Choose Us</span>
                        <h2 className="section-title">The ASDTech Creation Advantage</h2>
                        <p className="text-secondary">We combine innovation, expertise, and dedication to deliver excellence</p>
                    </div>

                    <div className="theory-content-no-card">
                        <p>We create <span className="theory-highlight">modern, high-performance websites</span> that help businesses establish a strong online presence and achieve their goals. Our focus is not just on building websites, but on delivering solutions that are <span className="theory-highlight">visually appealing, user-friendly, mobile responsive, and optimized for growth</span>. From the initial consultation to post-launch support, we work closely with our clients to ensure every project is completed with quality, transparency, and attention to detail.</p>
                        <p>With a commitment to <span className="theory-highlight">timely delivery, affordable pricing, and long-term support</span>, we strive to provide websites that not only look great but also perform effectively for your business. Whether you need a business website, e-commerce platform, or custom web solution, we aim to deliver results that create real value for your brand.</p>
                    </div>


                    <div className="usp-grid">
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-rocket"></i></div>
                            <h4>Fast & Reliable Delivery</h4>
                            <p>On-time project completion with agile methodology and regular progress updates.</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-mobile-alt"></i></div>
                            <h4>Mobile Responsive Design</h4>
                            <p>Flawless experience across all devices — phones, tablets, and desktops.</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-chart-line"></i></div>
                            <h4>SEO-Friendly Development</h4>
                            <p>Clean code and structure that search engines love for better rankings.</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-briefcase"></i></div>
                            <h4>Custom Business Solutions</h4>
                            <p>Tailored software and platforms built to fit your unique requirements.</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-tag"></i></div>
                            <h4>Affordable Pricing</h4>
                            <p>Competitive rates without compromising quality — maximum ROI for clients.</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon"><i className="fas fa-headset"></i></div>
                            <h4>Ongoing Support & Maintenance</h4>
                            <p>24/7 assistance, regular updates, security patches, and backups.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-badge"><i className="fas fa-cogs me-1"></i> What We Offer</span>
            <h2 className="section-title">Web & Mobile App Development Services</h2>
            <p className="text-secondary">All-in-one web and mobile development for modern businesses.</p>
          </div>
          <div className="row g-4">
            <ServicesCards />
          </div>
        </div>
      </section>


            <section className="portfolio-preview">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge"><i className="fas fa-briefcase me-1"></i> Our Work</span>
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="text-secondary">A glimpse of our finest work</p>
                    </div>

                    <div className="portfolio-grid-preview">
                        <PortfolioPreviewCard limit={3} />
                    </div>

                    <div className="view-all-link">
            <Link to="/portfolio" className="view-all-btn">
              View All Projects <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
                </div>
            </section>


            <Testimonial />


            <OurWorkFlow />


            <section className="faq">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="section-badge"><i className="fas fa-question-circle me-1"></i> FAQ</span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="text-secondary">Got questions? We've got answers</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">How long does it take to build a website?</button></h2><div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion"><div className="accordion-body">Timeline varies based on project complexity. A typical website takes 4-8 weeks, while complex web applications may take 3-6 months.</div></div></div>
                                <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">Do you offer maintenance after launch?</button></h2><div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body">Yes! We offer ongoing maintenance packages including updates, security patches, backups, and technical support.</div></div></div>
                                <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">What technologies do you use?</button></h2><div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body">We use modern tech stacks including React, Node.js, Python, Laravel, Flutter, and cloud platforms like AWS.</div></div></div>
                                <div className="accordion-item"><h2 className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">Will my website be mobile-friendly?</button></h2><div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body">Absolutely! All our websites are fully responsive and optimized for all devices including mobile, tablet, and desktop.</div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    )
}

export default Service