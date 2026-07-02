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
import Cta from '../component/Cta'
import { useEffect } from "react";
function Service() {


    useEffect(() => {

        const serviceTypesData = [{
            id: 'business-website',
            name: 'Business Website',
            icon: 'fa-building',
            category: 'website',
            desc: 'Professional websites that establish your brand and attract customers.',
            tag: 'Corporate'
        }, {
            id: 'ecommerce-website',
            name: 'E-Commerce Website',
            icon: 'fa-shopping-cart',
            category: 'website',
            desc: 'Powerful online stores with secure payments and seamless checkout.',
            tag: 'Online Store'
        }, {
            id: 'portfolio-website',
            name: 'Portfolio Website',
            icon: 'fa-user',
            category: 'website',
            desc: 'Showcase your work and creative projects with stunning design.',
            tag: 'Creative'
        }, {
            id: 'school-website',
            name: 'School / College Website',
            icon: 'fa-school',
            category: 'website',
            desc: 'Modern educational websites for schools, colleges, and universities.',
            tag: 'Education'
        }, {
            id: 'hospital-website',
            name: 'Hospital Website',
            icon: 'fa-hospital',
            category: 'website',
            desc: 'Trustworthy healthcare websites with patient portals and booking.',
            tag: 'Healthcare'
        }, {
            id: 'restaurant-website',
            name: 'Restaurant Website',
            icon: 'fa-utensils',
            category: 'website',
            desc: 'Beautiful restaurant sites with online ordering and reservations.',
            tag: 'Food & Beverage'
        }, {
            id: 'realestate-website',
            name: 'Real Estate Website',
            icon: 'fa-house',
            category: 'website',
            desc: 'Property listing platforms with search filters and virtual tours.',
            tag: 'Real Estate'
        }, {
            id: 'travel-website',
            name: 'Travel Website',
            icon: 'fa-plane',
            category: 'website',
            desc: 'Stunning travel booking and tour management platforms.',
            tag: 'Travel & Tourism'
        }, {
            id: 'landing-page',
            name: 'Landing Page',
            icon: 'fa-landmark',
            category: 'website',
            desc: 'High-converting landing pages for campaigns and product launches.',
            tag: 'Marketing'
        }, {
            id: 'custom-web-app',
            name: 'Custom Web Application',
            icon: 'fa-layer-group',
            category: 'website',
            desc: 'Tailored web apps with custom features for your business needs.',
            tag: 'Enterprise'
        }, {
            id: 'native-mobile-app',
            name: 'Native Mobile App',
            icon: 'fa-mobile-screen',
            category: 'mobile',
            desc: 'High-performance native iOS and Android applications.',
            tag: 'iOS & Android'
        }, {
            id: 'crossplatform-app',
            name: 'Cross-Platform App',
            icon: 'fa-tablet-screen',
            category: 'mobile',
            desc: 'Build once, deploy everywhere with Flutter and React Native.',
            tag: 'Flutter & React Native'
        }, {
            id: 'ios-app',
            name: 'iOS App Development',
            icon: 'fa-app-store-ios',
            category: 'mobile',
            desc: 'Premium iOS apps with Swift and Apple\'s latest frameworks.',
            tag: 'Swift'
        }, {
            id: 'android-app',
            name: 'Android App Development',
            icon: 'fa-google-play',
            category: 'mobile',
            desc: 'Feature-rich Android apps with Kotlin and Jetpack Compose.',
            tag: 'Kotlin'
        }];

        // ================================================================
        // RENDER SERVICE TYPES
        // ================================================================
        const grid = document.getElementById('serviceTypesGrid');

        function renderServiceTypes(category = 'all') {
            grid.innerHTML = '';
            const filtered = serviceTypesData.filter(item =>
                category === 'all' || item.category === category
            );

            filtered.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'service-type-card';
                card.dataset.category = item.category;
                card.innerHTML = `
                            <span class="card-number">${String(index + 1).padStart(2, '0')}</span>
                            <span class="card-icon"><i class="fas ${item.icon}"></i></span>
                            <h4>${item.name}</h4>
                            <p>${item.desc}</p>
                            <span class="card-tag">${item.tag}</span>
                        `;
                grid.appendChild(card);
            });

            // Re-apply animation
            document.querySelectorAll('.service-type-card').forEach((card, i) => {
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = `cardFadeIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) backwards`;
                    card.style.animationDelay = `${i * 0.04}s`;
                }, 10);
            });
        }

        // ================================================================
        // CATEGORY TABS
        // ================================================================
        const tabs = document.querySelectorAll('.category-tab');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                const category = this.dataset.category;
                renderServiceTypes(category);
            });
        });

    
        renderServiceTypes('all');
    

    }, []);


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


            <section className="service-types-section">
        <div className="container">
            <div className="text-center mb-5">
                <span className="section-badge"><i className="fas fa-layer-group me-1"></i> What We Build</span>
                <h2 className="section-title">Website & Mobile App <span >Types</span></h2>
                <p className="text-secondary" >
                    We build custom websites and mobile applications tailored to your industry and business needs.
                </p>
            </div>

           
            <div className="category-tabs" id="categoryTabs">
                <button className="category-tab active" data-category="all"><i className="fas fa-th-large"></i> All</button>
                <button className="category-tab" data-category="website"><i className="fas fa-globe"></i> Websites</button>
                <button className="category-tab" data-category="mobile"><i className="fas fa-mobile-screen"></i> Mobile Apps</button>
            </div>

            
            <div className="service-types-grid" id="serviceTypesGrid"></div>

           

           
            
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

            <Cta
                badgeTitle="Let's Build Together"
                prefix="Ready to Grow"
                highlight="Your Business"
                suffix="with Our Services?"
                description="From custom websites and mobile apps to SEO and digital solutions, ASDTech Creation delivers innovative, scalable, and result-driven services tailored to your business goals. Let's turn your ideas into reality."
                button2="Get Free Consultation"
            />

        </>


    )
}

export default Service