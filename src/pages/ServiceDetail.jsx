import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import BreadCrumb from '../component/BreadCrumb';
import Hero from '../component/Hero';
import { useNavigate } from "react-router-dom";
import './ServiceDetail.css';
import projects from '../api_js/script'; // adjust path if needed

import './ServiceDetail.css';
const serviceData = {
    web: {
        id: 'web',
        name: 'Web Development',
        icon: 'fa-code',
        heroTag: 'Web Development',
        heroTagIcon: 'fa-code',
        heroTitle: 'Build High-Performance Web Applications',
        heroTitleHighlight: 'Web Applications',
        heroDesc: 'We build fast, scalable, and secure web applications that drive business growth and deliver exceptional user experiences.',
        heroStats: [
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '2.5x', label: 'Avg. ROI Increase' },
        ],
        benefits: [
            { icon: 'fa-rocket', color: '#4361ee', title: 'Fast Performance', desc: 'Lightning-fast load times with optimized code and modern infrastructure.' },
            { icon: 'fa-shield-alt', color: '#4cc9f0', title: 'Secure & Scalable', desc: 'Enterprise-grade security and architecture that grows with your business.' },
            { icon: 'fa-mobile-alt', color: '#f72585', title: 'Mobile Responsive', desc: 'Flawless experience across all devices — phones, tablets, and desktops.' }
        ],
        overview: {
            image: '/webImage.png',
            title: 'Custom Web Solutions That Drive Results',
            desc: 'We build websites and web applications that combine stunning design with powerful functionality. Our focus is on creating digital experiences that engage users and achieve your business objectives.',
            list: [
                'Custom design tailored to your brand',
                'SEO-optimized for better search rankings',
                'CMS integration for easy content management',
                'Ongoing support and maintenance'
            ]
        },
        features: [
            { icon: 'fa-paint-brush', title: 'Custom UI/UX Design', desc: 'Pixel-perfect designs crafted for your target audience.' },
            { icon: 'fa-database', title: 'Database Integration', desc: 'Seamless integration with MySQL, PostgreSQL, or MongoDB.' },
            { icon: 'fa-cloud', title: 'Cloud Hosting Setup', desc: 'Deploy on AWS, Azure, or Google Cloud with CI/CD pipelines.' },
            { icon: 'fa-lock', title: 'Security Hardening', desc: 'SSL, encryption, and best practices for data protection.' },
            { icon: 'fa-search', title: 'SEO Optimization', desc: 'Built-in SEO features to help you rank higher in search results.' },
            { icon: 'fa-headset', title: '24/7 Support', desc: 'Round-the-clock assistance from our expert team.' }
        ],
        process: [
            { number: '01', title: 'Discovery & Planning', desc: 'We understand your goals, audience, and requirements to create a detailed project roadmap.' },
            { number: '02', title: 'Design & Development', desc: 'Our team creates stunning designs and develops clean, maintainable code with regular updates.' },
            { number: '03', title: 'Testing & Launch', desc: 'Rigorous testing across devices and browsers, followed by a smooth deployment and handover.' }
        ],

        techs: [
            { icon: 'fab fa-react', color: '#61dafb', name: 'React' },
            { icon: 'fab fa-vuejs', color: '#4fc08d', name: 'Vue.js' },
            { icon: 'fab fa-angular', color: '#dd0031', name: 'Angular' },
            { icon: 'fab fa-node-js', color: '#68a063', name: 'Node.js' },
            { icon: 'fab fa-python', color: '#3776ab', name: 'Python' },
            { icon: 'fab fa-php', color: '#777bb4', name: 'PHP' },
            { icon: 'fas fa-database', color: '#336791', name: 'PostgreSQL' },
            { icon: 'fab fa-aws', color: '#ff9900', name: 'AWS' },
            { icon: 'fab fa-docker', color: '#2496ed', name: 'Docker' },
            { icon: 'fab fa-bootstrap', color: '#7952b3', name: 'Bootstrap' }
        ],
        pricing: [
            { price: '$2,500', period: '/project', title: 'Starter', desc: 'Perfect for small businesses', features: ['5 Pages Website', 'Mobile Responsive', 'SEO Optimized', '1 Month Support'], btnText: 'Get Started', popular: false },
            { price: '$5,500', period: '/project', title: 'Professional', desc: 'For growing businesses', features: ['15 Pages Website', 'Custom CMS', 'E-commerce Ready', '3 Months Support'], btnText: 'Get Started', popular: true },
            { price: '$9,900', period: '/project', title: 'Enterprise', desc: 'For large-scale applications', features: ['Unlimited Pages', 'Custom Development', 'API Integrations', '12 Months Support'], btnText: 'Contact Sales', popular: false }
        ],
        faq: [
            { q: 'How long does it take to build a website?', a: 'Timeline varies based on project complexity. A typical website takes 4-8 weeks, while complex web applications may take 3-6 months.' },
            { q: 'Do you offer maintenance after launch?', a: 'Yes! We offer ongoing maintenance packages including updates, security patches, backups, and technical support.' },
            { q: 'Can you redesign my existing website?', a: 'Absolutely! We can redesign your current website to improve performance, design, and user experience while preserving your content.' },
            { q: 'Do you provide hosting services?', a: 'Yes, we offer cloud hosting solutions with 99.99% uptime, automatic backups, and 24/7 monitoring through our trusted partners.' }
        ],
        cta: { title: 'Ready to Build Your Dream Website?', desc: "Let's discuss how we can bring your vision to life with a custom web solution.", btnText: 'Start Your Project Today' }
    },
    seo: {
        id: 'seo',
        name: 'SEO',
        icon: 'fa-chart-line',
        heroTag: 'SEO Services',
        heroTagIcon: 'fa-chart-line',
        heroTitle: 'Dominate Search Rankings with Data-Driven SEO',
        heroTitleHighlight: 'Data-Driven SEO',
        heroDesc: 'We help businesses increase organic traffic, improve search rankings, and drive sustainable growth through proven SEO strategies.',
        heroStats: [
            { value: '150+', label: 'Keywords Ranked' },
            { value: '93%', label: 'Client Retention' },
            { value: '4.2x', label: 'Avg. Traffic Increase' },
        ],
        benefits: [
            { icon: 'fa-arrow-up', color: '#f72585', title: 'Higher Rankings', desc: 'We use proven strategies to get your site on the first page of Google.' },
            { icon: 'fa-users', color: '#4361ee', title: 'Targeted Traffic', desc: 'Attract high-quality visitors who are actively searching for your products or services.' },
            { icon: 'fa-chart-bar', color: '#4cc9f0', title: 'Measurable Results', desc: 'Transparent reporting with clear metrics on traffic, rankings, and conversions.' }
        ],
        overview: {
            image: '/seoImage.png',
            title: 'Data-Driven SEO That Delivers Results',
            desc: 'Our SEO strategies are built on data, research, and proven techniques. We optimize your website to rank higher, attract more visitors, and convert them into loyal customers.',
            list: [
                'Comprehensive keyword research and strategy',
                'On-page and technical SEO optimization',
                'High-quality backlink building',
                'Regular performance tracking and reporting'
            ]
        },
        features: [
            { icon: 'fa-search', title: 'Keyword Research', desc: 'Find the right keywords to target for maximum visibility.' },
            { icon: 'fa-code', title: 'Technical SEO', desc: 'Optimize site structure, speed, and crawlability for search engines.' },
            { icon: 'fa-file-alt', title: 'Content Strategy', desc: 'Create high-quality content that ranks and engages your audience.' },
            { icon: 'fa-link', title: 'Link Building', desc: 'Build high-authority backlinks to boost your domain authority.' },
            { icon: 'fa-mobile-alt', title: 'Mobile Optimization', desc: 'Ensure your site is fully optimized for mobile users.' },
            { icon: 'fa-chart-bar', title: 'Analytics & Reporting', desc: 'Detailed reports to track progress and measure success.' }
        ],
        process: [
            { number: '01', title: 'SEO Audit & Research', desc: 'We analyze your current SEO performance and identify opportunities for improvement.' },
            { number: '02', title: 'Strategy Development', desc: 'We create a customized SEO strategy tailored to your business goals and target audience.' },
            { number: '03', title: 'Implementation & Optimization', desc: 'We execute the strategy with ongoing optimization and performance tracking.' }
        ],

        techs: [
            { icon: 'fab fa-google', color: '#4285f4', name: 'Google Analytics' },
            { icon: 'fab fa-google', color: '#34a853', name: 'Search Console' },
            { icon: 'fas fa-tools', color: '#f72585', name: 'SEMrush' },
            { icon: 'fas fa-robot', color: '#4361ee', name: 'Ahrefs' },
            { icon: 'fas fa-code', color: '#4cc9f0', name: 'Schema Markup' },
            { icon: 'fas fa-mobile-alt', color: '#06b6d4', name: 'Mobile-First' }
        ],
        pricing: [
            { price: '$1,200', period: '/month', title: 'Starter SEO', desc: 'Perfect for small businesses', features: ['5 Keywords Tracked', 'Monthly SEO Audit', 'Basic Reporting', 'Email Support'], btnText: 'Get Started', popular: false },
            { price: '$2,500', period: '/month', title: 'Professional SEO', desc: 'For growing businesses', features: ['15 Keywords Tracked', 'Weekly SEO Audit', 'Content Strategy', 'Monthly Reporting'], btnText: 'Get Started', popular: true },
            { price: '$4,900', period: '/month', title: 'Enterprise SEO', desc: 'For large-scale campaigns', features: ['Unlimited Keywords', 'Daily Monitoring', 'Advanced Link Building', 'Dedicated SEO Manager'], btnText: 'Contact Sales', popular: false }
        ],
        faq: [
            { q: 'How long does SEO take to show results?', a: 'SEO is a long-term strategy. Typically, you can see initial results in 3-6 months, with significant improvements in 6-12 months.' },
            { q: 'Do you guarantee #1 rankings?', a: 'No reputable SEO agency can guarantee #1 rankings. However, we guarantee to use ethical, white-hat strategies to improve your rankings and traffic.' },
            { q: 'What is included in your SEO packages?', a: 'Our packages include keyword research, on-page optimization, technical SEO, content strategy, link building, and regular performance reporting.' },
            { q: 'Do you work with local businesses?', a: 'Yes! We specialize in local SEO to help businesses attract customers in their area.' }
        ],
        cta: { title: 'Ready to Rank Higher on Google?', desc: "Let's create an SEO strategy that drives targeted traffic and grows your business.", btnText: 'Start Your SEO Journey' }
    },
    mobile: {
        id: 'mobile',
        name: 'Mobile App Development',
        icon: 'fa-mobile-alt',
        heroTag: 'Mobile App Development',
        heroTagIcon: 'fa-mobile-alt',
        heroTitle: 'Build World-Class Mobile Applications',
        heroTitleHighlight: 'Mobile Applications',
        heroDesc: 'We design and develop native and cross-platform mobile apps that deliver exceptional user experiences and drive business growth.',
        heroStats: [
            { value: '30+', label: 'Apps Launched' },
            { value: '96%', label: 'User Satisfaction' },
            { value: '4.8', label: 'Avg. App Store Rating' },
        ],
        benefits: [
            { icon: 'fa-mobile-alt', color: '#4cc9f0', title: 'Native Performance', desc: 'Optimized apps that deliver smooth, fast, and responsive experiences.' },
            { icon: 'fa-layer-group', color: '#4361ee', title: 'Cross-Platform', desc: 'Reach both iOS and Android users with a single codebase using Flutter or React Native.' },
            { icon: 'fa-cloud-upload-alt', color: '#f72585', title: 'App Store Deployment', desc: 'Full support for publishing your app on the App Store and Google Play Store.' }
        ],
        overview: {
            image: '/mobileImage.png',
            title: 'Mobile Apps That Users Love',
            desc: 'We create mobile applications that combine beautiful design with powerful functionality. Our focus is on delivering apps that users love to use and that achieve your business objectives.',
            list: [
                'Native iOS and Android development',
                'Cross-platform solutions with Flutter and React Native',
                'Intuitive UI/UX design',
                'Backend integration and API development'
            ]
        },
        features: [
            { icon: 'fa-apple', title: 'iOS Development', desc: 'Native iOS apps with Swift and the latest Apple frameworks.' },
            { icon: 'fa-android', title: 'Android Development', desc: 'Native Android apps with Kotlin and Jetpack Compose.' },
            { icon: 'fa-layer-group', title: 'Cross-Platform', desc: 'Build once, deploy everywhere with Flutter or React Native.' },
            { icon: 'fa-cloud', title: 'Backend Integration', desc: 'Seamless integration with cloud services and APIs.' },
            { icon: 'fa-shield-alt', title: 'Security', desc: 'Enterprise-grade security for data protection and user privacy.' },
            { icon: 'fa-rocket', title: 'App Store Optimization', desc: 'Optimize your app listing for better visibility and downloads.' }
        ],
        process: [
            { number: '01', title: 'Discovery & Strategy', desc: 'We define your app idea, target audience, and key features to create a detailed product roadmap.' },
            { number: '02', title: 'Design & Development', desc: 'Our designers create stunning UI, and our developers build a robust, scalable app.' },
            { number: '03', title: 'Testing & Launch', desc: 'We rigorously test your app and guide you through the App Store and Play Store submission process.' }
        ],

        techs: [
            { icon: 'fab fa-apple', color: '#fa7343', name: 'Swift' },
            { icon: 'fab fa-android', color: '#3ddc84', name: 'Kotlin' },
            { icon: 'fab fa-react', color: '#02569b', name: 'Flutter' },
            { icon: 'fab fa-react', color: '#61dafb', name: 'React Native' },
            { icon: 'fas fa-cloud', color: '#4285f4', name: 'Firebase' },
            { icon: 'fas fa-database', color: '#336791', name: 'PostgreSQL' },
            { icon: 'fab fa-aws', color: '#ff9900', name: 'AWS' },
            { icon: 'fab fa-apple', color: '#a5b4fc', name: 'iOS SDK' }
        ],
        pricing: [
            { price: '$15,000', period: '/project', title: 'Basic App', desc: 'Simple app with core features', features: ['5 Screens', 'Basic Backend', 'App Store Submission', '1 Month Support'], btnText: 'Get Started', popular: false },
            { price: '$35,000', period: '/project', title: 'Professional App', desc: 'Full-featured app with advanced capabilities', features: ['10+ Screens', 'Custom Backend', 'Push Notifications', '3 Months Support'], btnText: 'Get Started', popular: true },
            { price: '$65,000+', period: '/project', title: 'Enterprise App', desc: 'Complex app with enterprise features', features: ['Unlimited Screens', 'AI/ML Integration', 'Real-time Sync', '12 Months Support'], btnText: 'Contact Sales', popular: false }
        ],
        faq: [
            { q: 'How much does it cost to build a mobile app?', a: 'The cost varies based on complexity, features, and platforms. A basic app can start from $15,000, while complex enterprise apps can range from $50,000 to $150,000+.' },
            { q: 'Do you build apps for both iOS and Android?', a: 'Yes! We build native apps for both platforms and cross-platform apps using Flutter and React Native.' },
            { q: 'How long does it take to develop a mobile app?', a: 'Timeline varies based on complexity. A simple app takes 2-3 months, while complex apps can take 4-6 months or more.' },
            { q: 'Do you help with app store submission?', a: 'Yes, we guide you through the entire App Store and Google Play Store submission process.' }
        ],
        cta: { title: 'Ready to Build Your Mobile App?', desc: "Let's discuss your app idea and create a solution that users will love.", btnText: 'Start Your App Project' }
    }
};

const serviceCategoryMap = {
    web: "Web App",
    mobile: "Mobile App",
    seo: "SEO",
};

function StarRating({ rating }) {
    return (
        <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{i < Math.round(rating) ? "★" : "☆"}</span>
            ))}
        </div>
    );
}

function Avatar({ name, image }) {
    if (image && image !== "/user.png") {
        return (
            <img
                src={image}
                alt={name || "user"}
                className="avatar"
                style={{ objectFit: "cover" }}
            />
        );
    }

    const initials =
        name?.split(" ")?.map((n) => n?.[0])?.join("") || "?";

    return <div className="avatar">{initials}</div>;
}

function ServiceDetail() {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const [openFaq, setOpenFaq] = useState(0);

    // ❌ invalid service redirect (safe check)
    if (!serviceData?.[serviceId]) {
        return <Navigate to="/service/web" replace />;
    }

    const data = serviceData[serviceId];

    // map service → project category
    const categoryKey = serviceCategoryMap[serviceId] || "";
    const filteredProjects = (projects || []).filter(
        (p) => p.category === categoryKey
    );

    const portfolioFromProjects = filteredProjects.map((p) => ({
        image: p.image,
        tag: p.category,
        title: p.title,
        desc: p.description,
        id: p.id,
    }));


    // ✅ FIXED testimonials extraction
    const projectTestimonials = (projects || [])
        .filter((p) => {
            return (
                p.category === categoryKey &&
                p.testimonial &&
                p.testimonial.name &&
                p.testimonial.message
            );
        })
        .map((p) => ({
            name: p.testimonial.name,
            role: `${p.testimonial.designation || ""} ${p.testimonial.company ? `, ${p.testimonial.company}` : ""
                }`,
            image: p.testimonial.image || "/user.png",
            text: p.testimonial.message,
            rating: 5,
            projectTitle: p.title,
        }));

    return (
        <>
            <BreadCrumb pageName={data?.name} />

            <Hero
                HeroTitlePrefix="Where Creativity Meets Code"
                HeroTitleSuffix="Meets Code"
                HeroDescription="Get a complete overview of this service, including its features, workflow, technologies, and real-world value for your business growth."
            />

            <section className="service-detail-section">
                <div className="container">
                    <div className="service-content-wrapper fade-in">

                        {/* BENEFITS */}
                        <section className="benefits-section py-5">
                            <div className="container">
                                <div className="text-center mb-4">
                                    <span className="section-badge">Why Choose Us</span>
                                    <h2 className="section-title">Key Benefits</h2>
                                    <p>Everything you need to succeed online</p>
                                </div>

                                <div className="row g-4">
                                    {data?.benefits?.map((b, i) => (
                                        <div className="col-md-4" key={b.title || i}>
                                            <div className="benefit-card">
                                                <span className="benefit-icon">
                                                    <i
                                                        className={`fas ${b.icon}`}
                                                        style={{ color: b.color }}
                                                    />
                                                </span>
                                                <h4>{b.title}</h4>
                                                <p>{b.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* OVERVIEW */}
                        <section className="overview-section py-5">
                            <div className="container">
                                <div className="row g-5 align-items-center">
                                    <div className="col-lg-6">
                                        <div className="overview-image">
                                            <img
                                                src={data?.overview?.image}
                                                alt="Service Overview"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="overview-content">
                                            <span className="section-badge">Overview</span>
                                            <h2>{data?.overview?.title}</h2>
                                            <p>{data?.overview?.desc}</p>

                                            <ul>
                                                {data?.overview?.list?.map((item, i) => (
                                                    <li key={i}>
                                                        <i className="fas fa-check-circle"></i>{" "}
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FEATURES */}
                        <section className="features-section py-5">
                            <div className="container">
                                <div className="text-center mb-4">
                                    <span className="section-badge">Features</span>
                                    <h2 className="section-title">What's Included</h2>
                                    <p>Every project comes with these powerful features</p>
                                </div>

                                <div className="row g-4">
                                    {data?.features?.map((f, i) => (
                                        <div className="col-md-4" key={f.title || i}>
                                            <div className="feature-card">
                                                <span className="feature-icon">
                                                    <i className={`fas ${f.icon}`} />
                                                </span>
                                                <h4>{f.title}</h4>
                                                <p>{f.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* PROCESS */}
                        <section className="process-section py-5">
                            <div className="container">
                                <div className="text-center mb-4">
                                    <span className="section-badge">Our Process</span>
                                    <h2 className="section-title">How We Work</h2>
                                    <p>A transparent approach from start to finish</p>
                                </div>

                                <div className="row g-4">
                                    {data?.process?.map((p, i) => (
                                        <div className="col-md-4" key={p.number || i}>
                                            <div className="process-step">
                                                <span className="step-number">{p.number}</span>
                                                <div className="step-content">
                                                    <h4>{p.title}</h4>
                                                    <p>{p.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>


                        {/* PORTFOLIO */}
                        <section className="portfolio-proof py-5">
                            <div className="container">
                                <div className="text-center mb-4">
                                    <span className="section-badge">Portfolio</span>
                                    <h2 className="section-title">Our Work</h2>
                                    <p>See what we've built for our clients</p>
                                </div>

                                <div className="row g-4">
                                    {portfolioFromProjects.map((p) => (
                                        <div className="col-md-4" key={p.id}>
                                            <div className="proof-card">

                                                <div className="proof-image">
                                                    <img src={p.image} alt={p.title} />

                                                    <div
                                                        className="proof-overlay"
                                                        onClick={() => navigate(`/project-details/${p.id}`)}
                                                    >
                                                        <i className="fas fa-eye"></i>
                                                    </div>
                                                </div>

                                                <div className="proof-body">
                                                    <span className="proof-tag">{p.tag}</span>
                                                    <h4>{p.title}</h4>
                                                    <p>{p.desc}</p>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>


                        {/* TECHNOLOGIES */}
                        <section className="tech-section-service py-5">
                            <div className="container text-center">
                                <span className="section-badge">Tech Stack</span>
                                <h2 className="section-title">Technologies We Use</h2>

                                <div className="d-flex flex-wrap justify-content-center">
                                    {data?.techs?.map((t, i) => (
                                        <span className="tech-badge-service" key={t.name || i}>
                                            <i className={t.icon} style={{ color: t.color }}></i>{" "}
                                            {t.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* PRICING */}
                        <section className="pricing-section py-5">
                            <div className="container">
                                <div className="text-center mb-4">
                                    <span className="section-badge">Pricing</span>
                                    <h2 className="section-title">Choose Your Plan</h2>
                                </div>

                                <div className="row g-4">
                                    {data?.pricing?.map((p, i) => (
                                        <div className="col-md-4" key={p.title || i}>
                                            <div className={`pricing-card ${p.popular ? "popular" : ""}`}>
                                                {p.popular && (
                                                    <span className="popular-badge">Most Popular</span>
                                                )}

                                                <div className="price">
                                                    {p.price}
                                                    <span>{p.period}</span>
                                                </div>

                                                <h4>{p.title}</h4>
                                                <p>{p.desc}</p>

                                                <ul className="pricing-features">
                                                    {p.features.map((f, j) => (
                                                        <li key={j}>
                                                            <i className="fas fa-check"></i> {f}
                                                        </li>
                                                    ))}
                                                </ul>

                                                <button className={`btn-pricing ${p.popular ? "primary" : "outline"}`}>
                                                    {p.btnText}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section className="faq-section-service py-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="accordion">
                                            {data?.faq?.map((f, i) => (
                                                <div className="accordion-item" key={i}>
                                                    <button
                                                        className={`accordion-button ${openFaq !== i ? "collapsed" : ""}`}
                                                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                                    >
                                                        {f.q}
                                                    </button>

                                                    <div
                                                        className={`accordion-collapse collapse ${openFaq === i ? "show" : ""
                                                            }`}
                                                    >
                                                        <div className="accordion-body">{f.a}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        {/* <div className="final-cta-service">
                            <div className="container">
                                <h2>{data?.cta?.title}</h2>
                                <p>{data?.cta?.desc}</p>

                                <a href="#" className="btn-cta-service">
                                    <i className="fas fa-paper-plane"></i>{" "}
                                    {data?.cta?.btnText}
                                </a>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>

            <cta />
        </>
    );




}

export default ServiceDetail;