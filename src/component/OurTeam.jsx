import './OurTeam.css'

function OurTeam() {
    return (
        <section className="team-section">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="story-badge"><i className="fas fa-users me-1"></i> Meet The Team</span>
                    <h2 className="story-title">The Minds Behind CodeStack</h2>
                    <p className="text-secondary">Passionate creators, problem solvers, and tech enthusiasts</p>
                </div>
                <div className="team-grid">
                    <div className="team-card">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" className="team-img" />
                        <h4>Alex Morgan</h4>
                        <div className="team-role">Founder & CEO</div>
                        <p className="team-bio">10+ years in web & mobile app development. Leads company vision.</p>
                        <div className="team-social">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-github"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" className="team-img" />
                        <h4>Sarah Chen</h4>
                        <div className="team-role">Technical Director</div>
                        <p className="team-bio">Expert in React Native, Flutter & cloud architecture.</p>
                        <div className="team-social">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-github"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src="https://randomuser.me/api/portraits/men/45.jpg" className="team-img" />
                        <h4>David Kim</h4>
                        <div className="team-role">Lead Designer</div>
                        <p className="team-bio">Creative UI/UX designs that convert and delight users.</p>
                        <div className="team-social">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-github"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src="https://randomuser.me/api/portraits/women/33.jpg" className="team-img" />
                        <h4>Emily Rodriguez</h4>
                        <div className="team-role">Project Manager</div>
                        <p className="team-bio">Ensures smooth delivery and client satisfaction.</p>
                        <div className="team-social">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-github"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam