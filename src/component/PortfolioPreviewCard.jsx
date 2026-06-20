import React from "react";
import { Link } from "react-router-dom";

function PortfolioPreviewCard({ limit }) {
    const portfolioData = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            title: "Leeangadi",
            description: "Responsive business website with modern UI and smooth performance.",
            category: "Web Development",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            title: "PST Silver Ledger",
            description: "Secure ledger app for tracking transactions in real time efficiently accurately.",
            category: "Mobile App",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            title: "Leeangadi Business Service",
            description: "Fast and user-friendly mobile app for seamless business access.",
            category: "Mobile App",
        },
        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop",
            title: "Vinayaga Poultry Farm",
            description: "Farm management app for easy monitoring and operations.",
            category: "Mobile App",
        },
    ];

    const projects = limit
        ? portfolioData.slice(0, limit)
        : portfolioData;

    return (
        <>
            {projects.map((project) => (
                <div
                    className="portfolio-preview-card"
                    key={project.id}
                >
                    <div className="portfolio-preview-img">
                        <img
                            src={project.image}
                            alt={project.title}
                        />

                        <div className="portfolio-preview-overlay">
                            <Link to="/portfolio">
                                <i className="fas fa-eye"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="portfolio-preview-info">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>

                        <span className="portfolio-preview-cat">
                            {project.category}
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PortfolioPreviewCard;