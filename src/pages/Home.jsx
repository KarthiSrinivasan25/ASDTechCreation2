import './home.css';
import StatsCompact from '../component/StatsCompact';
import Testinomial from '../component/Testinomial'
import Cta from '../component/Cta';
import ClientBrand from '../component/ClientBrand';
import TechnologiesSection from '../component/TechnologiesSection';
import PortfolioPreviewCard from '../component/PortfolioPreviewCard';
import OurWorkFlow from '../component/OurWorkFlow';
import ServicesCards from '../component/ServicesCards';
import { Link } from "react-router-dom";
import SEO from '../component/SEO';


function Home() {
  return (
    <>

    <SEO
  title="ASDTech Creation | Web Development, Mobile App Development & SEO Company"
  description="ASDTech Creation is a leading web development company offering website development, mobile app development, eCommerce solutions, SEO services, and digital solutions for businesses."
  keywords="ASDTech Creation, Web Development Company, Website Development, Mobile App Development, SEO Services, eCommerce Website Development, eCommerce App Development, Digital Solutions"
/>



      <section>


        <div className="hero-carousel">
          <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">

              <div
                className="carousel-item active"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/home1.png')"
                }}
              >
                <div className="carousel-caption p-5">
                  <h1>Innovative Web Solutions</h1>
                  <p>
                    Custom web applications, enterprise platforms, and scalable digital ecosystems built with modern frameworks.
                  </p>

                  <a href="#" className="carousel-btn">
                    Explore Services <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>

              <div className="carousel-item" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/home2.png')" }}>
                <div className="carousel-caption p-5">
                  <h1>Mobile App Development</h1>
                  <p>We build high-performance Android and iOS apps with intuitive UI, seamless UX, and scalable architecture.</p>
                  <a href="#" className="carousel-btn">Explore Apps <i className="fas fa-arrow-right ms-2"></i></a>
                </div>
              </div>

              <div className="carousel-item" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/home3.png')" }}>
                <div className="carousel-caption p-5">
                  <h1>SEO & Digital Growth Solutions</h1>
                  <p>Boost your website ranking with on-page SEO, technical SEO, content optimization, and data-driven digital marketing strategies.</p>
                  <a href="#" className="carousel-btn">Improve Ranking <i className="fas fa-arrow-right ms-2"></i></a>
                </div>
              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </section>


      <section className="about-advanced">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="about-badge"><i className="fas fa-code me-1"></i> About Us</span>
              <h1 className="about-title">We build websites & apps that deliver real business results.</h1>
              <p className="about-description">ASD Tech Creation is a leading web development company specializing in custom websites, web applications, and e-commerce solutions. We combine cutting-edge technology with user-centered design to create digital experiences that perform.</p>

              <p className="about-description">With over 1 years of experience and 4 successful projects, we've helped businesses of all sizes establish a powerful online presence. From startups to enterprises, our tailored web solutions deliver measurable growth.</p>



              <div className="mt-3">
                <div className="culture-tag"><i className="fas fa-code"></i> Full-Stack Development</div>
                <div className="culture-tag"><i className="fab fa-android"></i> Android App Development</div>
                <div className="culture-tag"><i className="fas fa-shield-alt"></i> Security-Focused</div>
                <div className="culture-tag"><i className="fas fa-mobile-alt"></i> Responsive Design</div>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div className="about-image-wrapper">
                <img src="./about.png" alt="Web development team" className="img-fluid" />
                <div className="image-gradient-overlay"></div>
                <div className="image-floating-badge">
                  <i className="fas fa-chart-line"></i> 4 Websites & Apps Delivered
                </div>
                <div className="image-decorative-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Our services */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-badge"><i className="fas fa-cogs me-1"></i> What We Offer</span>
            <h2 className="section-title">Our Services</h2>
            <p className="text-secondary">End-to-end web solutions tailored to your business needs</p>
          </div>
          <div className="row g-4">
            <ServicesCards limit={3} />
          </div>

          <div className="text-center mt-5">
            <Link to="/service" className="explore-services-btn">
              Explore All Services
              <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>


      <section className="why-choose-white">
        <div className="container">
          <div className="section-header">
            <span className="section-badge"><i className="fas fa-gem me-1"></i> Why Choose Us</span>
            <h2 className="section-title">The ASDTech Creation Advantage</h2>
            <p className="text-secondary">We combine technical excellence with a client-first approach</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="white-choose-card">
                <div className="choose-icon-white"><i className="fas fa-bolt"></i></div>
                <h4>Lightning Fast Performance</h4>
                <p>We optimize every line of code for speed, ensuring your website loads in under 2 seconds for better UX and SEO.</p>
                <span className="choose-highlight-white"><i className="fas fa-chart-line"></i> 40% faster load times</span>
                <div className="choose-number-white">01</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="white-choose-card">
                <div className="choose-icon-white"><i className="fas fa-headset"></i></div>
                <h4>24/7 Priority Support</h4>
                <p>Round-the-clock assistance from our expert team — we're always here to help with any technical needs or updates.</p>
                <span className="choose-highlight-white"><i className="fas fa-clock"></i> 15 min response time</span>
                <div className="choose-number-white">02</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="white-choose-card">
                <div className="choose-icon-white"><i className="fas fa-code-branch"></i></div>
                <h4>Clean & Scalable Code</h4>
                <p>Maintainable, well-documented code that grows with your business, making future updates and scaling effortless.</p>
                <span className="choose-highlight-white"><i className="fas fa-check-circle"></i> 100% commented code</span>
                <div className="choose-number-white">03</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="white-choose-card">
                <div className="choose-icon-white"><i className="fas fa-search"></i></div>
                <h4>SEO-Optimized Development</h4>
                <p>Built with SEO best practices from the ground up, helping you rank higher and attract more organic traffic.</p>
                <span className="choose-highlight-white"><i className="fas fa-chart-simple"></i> 3x more traffic</span>
                <div className="choose-number-white">04</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="white-choose-card">
                <div className="choose-icon-white"><i className="fas fa-shield-alt"></i></div>
                <h4>Enterprise Security</h4>
                <p>Robust security measures including SSL, data encryption, regular audits, and DDoS protection for your peace of mind.</p>
                <span className="choose-highlight-white"><i className="fas fa-lock"></i> ISO 27001 certified</span>
                <div className="choose-number-white">05</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="white-choose-card">
                <div className="choose-icon-white"><i className="fas fa-handshake"></i></div>
                <h4>Transparent Process</h4>
                <p>Regular updates, clear timelines, and open dialogue — we keep you informed at every stage of development.</p>
                <span className="choose-highlight-white"><i className="fas fa-chart-line"></i> Weekly progress reports</span>
                <div className="choose-number-white">06</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <StatsCompact />

      {/* <section className="stats-compact">
    <div className="container">
      <div className="row g-3">
        <div className="col-lg-3 col-md-6">
          <div className="stat-compact-item">
            <div className="stat-compact-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="stat-compact-number"><span className="counter" data-target="487">0</span><span className="plus">+</span></div>
            <div className="stat-compact-label">Projects Delivered</div>
            <div className="stat-compact-divider"></div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stat-compact-item">
            <div className="stat-compact-icon">
              <i className="fas fa-smile"></i>
            </div>
            <div className="stat-compact-number"><span className="counter" data-target="99">0</span><span className="plus">%</span></div>
            <div className="stat-compact-label">Client Satisfaction</div>
            <div className="stat-compact-divider"></div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stat-compact-item">
            <div className="stat-compact-icon">
              <i className="fas fa-globe"></i>
            </div>
            <div className="stat-compact-number"><span className="counter" data-target="52">0</span><span className="plus">+</span></div>
            <div className="stat-compact-label">Countries Served</div>
            <div className="stat-compact-divider"></div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stat-compact-item">
            <div className="stat-compact-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="stat-compact-number"><span className="counter" data-target="18">0</span><span className="plus">+</span></div>
            <div className="stat-compact-label">Industry Awards</div>
            <div className="stat-compact-divider"></div>
          </div>
        </div>
      </div>
    </div>
  </section> */}



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




 {/* <section className="portfolio-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <i className="fas fa-trophy me-1"></i> Our Work
            </span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-secondary">A glimpse of our finest work</p>
          </div>

          <div className="row g-5">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4">
                <PortfolioCard
                  project={project}
                  onPreview={setSelectedProject}
                />
              </div>
            ))}
          </div>

          <div className="view-all-link">
            <Link to="/portfolio" className="view-all-btn">
              View All Projects <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section> */}


      <TechnologiesSection />


      {/* <section className="tech-futuristic">
    <div className="animated-bg"></div>
    <div className="particle-field" id="particleField"></div>
    <div className="floating-orb orb-1"></div>
    <div className="floating-orb orb-2"></div>
    <div className="floating-orb orb-3"></div>
    <div className="container">
      <div className="section-header">
        <span className="section-badge"><i className="fas fa-microchip me-1"></i> Our Arsenal</span>
        <h2 className="section-title">Technologies We Master</h2>
        <p className="text-secondary">Cutting-edge tools for modern web solutions</p>
      </div>

      <div className="tech-tabs">
        <div className="tech-tab-btn active" data-category="frontend"><i className="fas fa-code me-1"></i> Frontend</div>
        <div className="tech-tab-btn" data-category="backend"><i className="fas fa-network-wired me-1"></i>
 Backend</div>
        <div className="tech-tab-btn" data-category="database"><i className="fas fa-database me-1 text-light"></i> Database</div>
      </div>

      <div className="tech-category-content active" id="frontend">
        <div className="tech-hex-grid">
          <div className="tech-hex-item"><div className="tech-hex-icon"><i className="fab fa-html5"></i></div><div className="tech-hex-name">HTML5</div><div className="tech-hex-desc">Semantic Structure</div><div className="tech-glow"></div></div>
          <div className="tech-hex-item"><div className="tech-hex-icon"><i className="fab fa-css3-alt"></i></div><div className="tech-hex-name">CSS3</div><div className="tech-hex-desc">Modern Animations</div><div className="tech-glow"></div></div>
          <div className="tech-hex-item"><div className="tech-hex-icon"><i className="fab fa-bootstrap"></i></div><div className="tech-hex-name">Bootstrap</div><div className="tech-hex-desc">Responsive Framework</div><div className="tech-glow"></div></div>
          <div className="tech-hex-item"><div className="tech-hex-icon"><i className="fab fa-js"></i></div><div className="tech-hex-name">JavaScript</div><div className="tech-hex-desc">Interactive Magic</div><div className="tech-glow"></div></div>
          <div className="tech-hex-item"><div className="tech-hex-icon"><i className="fab fa-react"></i></div><div className="tech-hex-name">React.js</div><div className="tech-hex-desc">Component-Based UI</div><div className="tech-glow"></div></div>
        </div>
      </div>

      <div className="tech-category-content" id="backend">
        <div className="tech-hex-grid">
          <div className="tech-hex-item"><div className="tech-hex-icon"><i className="fab fa-java"></i></div><div className="tech-hex-name">Java</div><div className="tech-hex-desc">Enterprise-Grade</div><div className="tech-glow"></div></div>
          <div className="tech-hex-item"><div className="tech-hex-icon"><i className="fab fa-php"></i></div><div className="tech-hex-name">PHP</div><div className="tech-hex-desc">Dynamic Backend</div><div className="tech-glow"></div></div>
        </div>
      </div>

      <div className="tech-category-content" id="database">
        <div className="tech-hex-grid">
          <div className="tech-hex-item"><div className="tech-hex-icon"><i className="fas fa-database"></i></div><div className="tech-hex-name">MySQL</div><div className="tech-hex-desc">Relational Database</div><div className="tech-glow"></div></div>
          <div className="tech-hex-item"><div className="tech-hex-icon"><i className="fas fa-fire"></i></div><div className="tech-hex-name">Firebase</div><div className="tech-hex-desc">Real-Time NoSQL</div><div className="tech-glow"></div></div>
        </div>
      </div>
    </div>
  </section> */}

      <OurWorkFlow />


      <Testinomial />


      <Cta badgeTitle="Limited Time Offer" prefix="Ready to" highlight="Transform" suffix="Your Business?"
        description="Join 500+ successful businesses. Get a free consultation and quote today!"
        button1="Start Project" button2="Free Consultation"
        trust1="No upfront payment" trust2="100% Satisfaction" trust3="24/7 Support" />


      <ClientBrand />

    </>
  )
}

export default Home