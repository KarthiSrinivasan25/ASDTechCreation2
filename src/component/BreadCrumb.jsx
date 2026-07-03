import './BreadCrumb.css'
import { Link } from "react-router-dom";

function BreadCrumb(props) {
  return (
    // style={{ backgroundImage: "url('./bread1.jpg')" }}
    <section className="breadcrumb-advanced-section" >
      <div className="breadcrumb-particles" id="breadcrumbParticles"></div>
      <div className="container">
        <div className="breadcrumb-advanced-wrapper">
          <div className="breadcrumb-advanced">
            <div className="breadcrumb-item">
              <Link to="/">
  <div className="breadcrumb-home-icon">
    <i className="fas fa-home"></i>
  </div>
</Link>
            </div>
            <span className="breadcrumb-separator"><i className="fas fa-chevron-right"></i></span>
            <div className="breadcrumb-item">
              <a href="#"><i className="fas fa-folder"></i> Pages</a>
            </div>
            <span className="breadcrumb-separator"><i className="fas fa-chevron-right"></i></span>
            <div className="breadcrumb-item active">
              <i className="fas fa-info-circle"></i> {props.pageName}
            </div>
          </div>
          <div className="page-title">
            <i className="fas fa-info-circle color-white"></i> {props.pageName} ASDTech Creation
          </div>
        </div>
      </div>
    </section>
  )
}

export default BreadCrumb