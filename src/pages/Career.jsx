import BreadCrumb from '../component/BreadCrumb'
import Hero from '../component/Hero'
import Cta from '../component/Cta'
import JobApplySection from '../component/JobApplySection'
import JobSection from '../component/JobSection'
import './Career.css'

function Career() {
    return (


        <>
            <BreadCrumb pageName="Career" />


            <Hero HeroTitlePrefix="Join Our Dream Team" HeroTitleSuffix="Build the Future" HeroDescription="Build your career with ASDTech Creation. We're looking for passionate individuals who love technology and innovation."/>
        
         


            <section className="why-join">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="section-badge"><i className="fas fa-heart me-1"></i> Why Join Us</span>
                        <h2 className="section-title">Benefits & Culture</h2>
                        <p className="text-secondary">We believe in creating an environment where you can thrive</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="fas fa-laptop-code"></i></div><h4>Remote Friendly</h4><p>Work from anywhere with flexible hours</p></div></div>
                        <div className="col-lg-3 col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="fas fa-graduation-cap"></i></div><h4>Learning Budget</h4><p>$2000 annual learning stipend</p></div></div>
                        <div className="col-lg-3 col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="fas fa-heartbeat"></i></div><h4>Health Insurance</h4><p>Comprehensive medical coverage</p></div></div>
                        <div className="col-lg-3 col-md-6"><div className="benefit-card"><div className="benefit-icon"><i className="fas fa-chart-line"></i></div><h4>Growth Path</h4><p>Clear career progression framework</p></div></div>
                    </div>
                </div>
            </section>


            <JobSection />

            <JobApplySection />


            <Cta prefix="Not Finding" highlight="The Right Fit?" suffix="Let’s Change That."  
            description="We're always looking for talented people. Send us your resume anyway!"
            button1="Send Application" />
        </>
    )
}

export default Career