import BreadCrumb from '../component/BreadCrumb'
import Hero from '../component/Hero'
import ContactForm from '../component/ContactForm'
import Cta from '../component/Cta'
import './Contact.css'
function Contact() {
    return (
        <>

            <BreadCrumb pageName="Contact" />

            <Hero HeroTitlePrefix="Let's Create Something" HeroTitleSuffix="Extraordinary" HeroDescription="Have a project in mind? We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours."/>

            

            <section className="contact-main">
                <div className="container">

                    <div className="row g-4 mb-4">
                        <div className="col-lg-5">
                            <div className="brand-card-premium">
                                <h2>Let's Talk Business</h2>
                                <p>We're here to answer your questions and discuss your next big idea. Reach out to us anytime.</p>

                                <div className="info-row-premium">
                                    <div className="info-icon-premium"><i className="fas fa-envelope"></i></div>
                                    <div className="info-text-premium">
                                        <h4>Email</h4>
                                        <p>asdtechcreation@gmail.com</p>
                                    </div>
                                </div>

                                <div className="info-row-premium">
                                    <div className="info-icon-premium"><i className="fas fa-phone-alt"></i></div>
                                    <div className="info-text-premium">
                                        <h4>Phone</h4>
                                        <p>+91 9361 064430</p>
                                        <p>+91 8754 631713</p>
                                    </div>
                                </div>

                                <div className="info-row-premium">
                                    <div className="info-icon-premium"><i className="fas fa-map-marker-alt"></i></div>
                                    <div className="info-text-premium">
                                        <h4>Office</h4>
                                        <p>123 Innovation Hub, Silicon Valley, Salem, Tamil Nadu, India</p>

                                    </div>
                                </div>

                                <div className="stats-row-premium">
                                    <div className="stat-item-premium">
                                        <div className="stat-number-premium">4+</div>
                                        <div className="stat-label-premium">Projects</div>
                                    </div>
                                    <div className="stat-item-premium">
                                        <div className="stat-number-premium">99%</div>
                                        <div className="stat-label-premium">Satisfaction</div>
                                    </div>
                                    <div className="stat-item-premium">
                                        <div className="stat-number-premium">24/7</div>
                                        <div className="stat-label-premium">Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ContactForm />
                    </div>


                    <div className="row g-4">
                        <div className="col-lg-5">
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="info-card-premium">
                                        <h4><i className="fas fa-clock"></i> Working Hours</h4>
                                        <ul className="hours-list-premium">
                                            <li><span>Monday - Friday</span><span>10:00 AM - 6:00 PM</span></li>
                                            <li><span>Saturday</span><span>10:00 AM - 4:00 PM</span></li>
                                            <li><span>Sunday</span><span>Closed</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="info-card-premium">
                                        <h4><i className="fas fa-share-alt"></i> Connect With Us</h4>
                                        <div className="social-grid-premium">
                                            <a href="#" className="social-link-premium"><i className="fab fa-twitter"></i></a>
                                            <a href="#" className="social-link-premium"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#" className="social-link-premium"><i className="fab fa-github"></i></a>
                                            <a href="#" className="social-link-premium"><i className="fab fa-instagram"></i></a>
                                            <a href="#" className="social-link-premium"><i className="fab fa-facebook-f"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="map-card-premium">
                                <h4><i className="fas fa-map"></i> Our Location</h4>
                                <div className="map-wrapper-premium">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4550!2d78.1460!3d11.6643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c1c1c1c1c1%3A0xabcdef1234567890!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"

                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>


             <Cta prefix="Ready to" highlight="Start" suffix="Your Project?"  
            description="Get a free consultation and quote from our experts"
            button2="Schedule Free Call" />

        </>
    )
}

export default Contact