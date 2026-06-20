import { FaCode, FaMobileAlt, FaChartLine, FaArrowRight } from "react-icons/fa";
import projects from "../api_js/script.js";
const categoryIcons = {
  "Web App": FaCode,
  "Mobile App": FaMobileAlt,
};
function PortfolioCard({ project, onPreview }) {
  const CategoryIcon = categoryIcons[project.category];

  return (
    <div className="project-card-enhanced">
      <div className="project-img-wrap">
        <img src={project.image} alt={project.title} />

        <div className="project-img-overlay"> <button className="btn-preview" onClick={() => onPreview(project)} > <i className="fas fa-images me-1"></i> Preview </button> </div>
      </div>

      <div className="project-body">

        {/* CATEGORY (Platform Icon) */}
        <span className="project-tag-enhanced">
          {CategoryIcon && <CategoryIcon style={{ marginRight: "5px" }} />}
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {/* TECH (Single icon) */}
        <div className="project-meta">
          <span>
            <FaCode style={{ marginRight: "5px", color: "#4361ee" }} />
            {project.tech}
          </span>

          {/* STATS (Single icon) */}
          <span>
            <FaChartLine style={{ marginRight: "5px", color: "#4361ee" }} />
            {project.stats}
          </span>
        </div>

        <div className="project-link-row">
          <a href="#" className="case-study-link">
            <FaArrowRight style={{ marginLeft: "6px" }} /> Case Study
          </a>
          <a href="#" className="live-demo">
            Live Demo
          </a>
        </div>

      </div>
    </div>
  );
}
export default PortfolioCard;