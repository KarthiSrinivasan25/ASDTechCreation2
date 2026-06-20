import BreadCrumb from "../component/BreadCrumb";
import './About.css'
import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/css.png'
import jsIcon from '../assets/icons/java-script.png'
import bootstrapIcon from '../assets/icons/bootstrap.png'
import reactIcon from '../assets/icons/react.png'
import javaIcon from '../assets/icons/java.png'
import phpIcon from '../assets/icons/php.png'
import mysqlIcon from '../assets/icons/mysql.png'

import web from '../assets/icons/web.png'
import ecommerce from '../assets/icons/ecommerce.png'
import seo from '../assets/icons/seo.png'
import android from '../assets/icons/android.png'
import asd from '../assets/asd_logo.jpg'
import OurTeam from "../component/OurTeam";
import Cta from "../component/Cta";



function About() {
  return (


    <>
      <BreadCrumb pageName="About"/>

      <section className="hero-ring">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-badge"><i className="fas fa-code"></i> Web Development Experts</div>
                <h1 className="hero-title">
                  We Build <span className="accent">High-Performance Websites & Apps</span> That Deliver Results
                </h1>
                <p className="hero-desc">ASDTech Creaion is a forward-thinking web development company dedicated to crafting innovative, high-performance digital solutions that help businesses thrive in the modern world.</p>
                <div className="hero-stats">
                  <div className="hero-stat"><div className="hero-stat-number">5+</div><div className="hero-stat-label">Years of Excellence</div></div>
                  <div className="hero-stat"><div className="hero-stat-number">250+</div><div className="hero-stat-label">Projects Delivered</div></div>
                  <div className="hero-stat"><div className="hero-stat-number">98%</div><div className="hero-stat-label">Client Retention</div></div>
                </div>
                <div className="hero-buttons">
                  <a href="contact.html" className="btn-hero-primary"><i className="fas fa-paper-plane"></i> Start Project</a>
                  <a href="#" className="btn-hero-secondary"><i className="fas fa-play-circle"></i> Watch Demo</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-ring">

                <div className="outer-ring"></div>
                <div className="deco-ring"></div>


                <div className="outer-rotating-ring">
                  <div className="ring-icon outer-icon-1"><img src={htmlIcon} alt="HTML5" /></div>
                  <div className="ring-icon outer-icon-2"><img src={cssIcon} alt="CSS3" /></div>
                  <div className="ring-icon outer-icon-3"><img src={jsIcon} alt="JavaScript" /></div>
                  <div className="ring-icon outer-icon-4"><img src={bootstrapIcon} alt="Bootstrap" /></div>
                  <div className="ring-icon outer-icon-5"><img src={reactIcon} alt="React" /></div>
                  <div className="ring-icon outer-icon-6"><img src={javaIcon} alt="Java" /></div>
                  <div className="ring-icon outer-icon-7"><img src={phpIcon} alt="PHP" /></div>
                  <div className="ring-icon outer-icon-8"><img src={mysqlIcon} alt="MySQL" /></div>
                </div>


                <div className="inner-rotating-ring">
                  <div className="ring-icon inner-icon-1"><img src={web} alt="Web Development" /></div>
                  <div className="ring-icon inner-icon-2"><img src={ecommerce} alt="Android" /></div>
                  <div className="ring-icon inner-icon-3"><img src={seo} alt="SEO" /></div>
                  <div className="ring-icon inner-icon-4"><img src={android} alt="UI/UX Design" /></div>

                </div>


                <div className="center-image">
                  <img src={asd} alt="Team collaboration" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="story-advanced">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <span className="story-badge"><i className="fas fa-book-open me-1"></i> Our Story</span>
              <h2 className="story-title">Crafting Exceptional Apps<br />Since 2020</h2>
              <div className="story-subtitle">From a Small Team to a Global App Development Powerhouse</div>
              <p className="story-text">What started as two developers coding in a small apartment has evolved into ASDTech Creation — a leading web and mobile app development agency serving clients across 20+ countries. Our journey began with a simple belief: <strong>great apps solve real problems</strong>.</p>
              <p className="story-text">Over the years, we've had the privilege of launching 250+ successful apps for startups, enterprises, and everything in between. From iOS and Android native apps to cross-platform solutions and powerful web applications, each project pushed us to innovate and excel.</p>
            </div>
          </div>

          <div className="story-highlight">
            <div className="row align-items-center">
              <div className="col-md-2 text-center">
                <i
                  className="fas fa-quote-left fa-3x"
                  style={{ color: "#4361ee", opacity: 0.5 }}
                ></i>
              </div>
              <div className="col-md-10">
                <p className="fw-bold">"We don't just build apps — we build digital experiences that users love. Every line of code we write is a step toward transforming ideas into impactful solutions."</p>
                <small className="text-muted">— Swetha Nagarajan, Founder & CEO</small>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-lg-10 text-center">
              <p className="story-text">Our team has grown, our technology stack has evolved, but our core mission remains unchanged: <strong>to deliver exceptional web and mobile solutions that drive real business results</strong>. We're committed to staying at the forefront of mobile and web technologies while maintaining the personalized attention our clients deserve.</p>
              <p className="story-text mb-0">Whether you need a feature-rich mobile app, a scalable web platform, or a cross-platform solution, we're here to bring your vision to life — with passion, precision, and purpose.</p>
            </div>
          </div>


          <div class="mv-unique">
        <div class="mv-split">
          <div class="mv-item">
            <div class="mv-icon-large"><i class="fas fa-bullseye"></i></div>
            <h3>Our Mission</h3>
            <p>To design and develop innovative, scalable web and mobile applications that help businesses grow, improve user experiences, and achieve measurable digital success.</p>
            <div class="mv-tagline"><i class="fas fa-arrow-right me-1"></i> What drives us forward</div>
          </div>
          <div class="mv-item">
            <div class="mv-icon-large"><i class="fas fa-eye"></i></div>
            <h3>Our Vision</h3>
            <p>To be a globally recognized leader in web and mobile app development, known for delivering high-quality solutions, continuous innovation, and exceptional client satisfaction.</p>
            <div class="mv-tagline"><i class="fas fa-globe me-1"></i> Where we're headed</div>
          </div>
        </div>
      </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fas fa-rocket"></i></div>
              <h4>Innovation First</h4>
              <p>We embrace cutting-edge technologies to deliver future-ready solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fas fa-heart"></i></div>
              <h4>User-Centric</h4>
              <p>We design apps that users love, with intuitive experiences.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fas fa-shield-alt"></i></div>
              <h4>Secure by Design</h4>
              <p>Security is embedded in every app we build from day one.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fas fa-handshake"></i></div>
              <h4>Transparent Process</h4>
              <p>Open communication and honest feedback build lasting partnerships.</p>
            </div>
          </div>
        </div>
      </section>


      <OurTeam />

      <Cta badgeTitle="Let’s Build Together" prefix="Have a" highlight="Project" suffix="in Mind?"  
            description="We turn your ideas into fast, modern, and scalable websites that help your business grow online."
            button2="Schedule a Free Consultation" />
    </>




  );
}

export default About;