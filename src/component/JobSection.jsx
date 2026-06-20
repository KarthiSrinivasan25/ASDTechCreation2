import { useState } from "react";
import './JobSection.css'


const jobs = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Remote / India",
    exp: "5+ years",
    skills: "React, Node.js, TypeScript, AWS, MongoDB",
    desc: "Looking for an experienced developer with 5+ years in React, Node.js, and cloud technologies."
  },
  {
    title: "Mobile App Developer",
    type: "Full-time",
    location: "Bangalore, India",
    exp: "3+ years",
    skills: "React Native, Flutter, iOS, Android, REST APIs",
    desc: "Seeking a passionate mobile developer with expertise in React Native or Flutter."
  },
  {
    title: "UI/UX Designer",
    type: "Remote",
    location: "Remote / Global",
    exp: "3+ years",
    skills: "Figma, Adobe XD, User Research, Prototyping",
    desc: "Creative designer with a strong portfolio in web and mobile app design."
  }
];

export default function JobSection() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleApplyNow = () => {
    setShowModal(false);

    // match your original logic
    const posSelect = document.getElementById("applicantPosition");
    if (posSelect && selectedJob) {
      for (let i = 0; i < posSelect.options.length; i++) {
        if (posSelect.options[i].text === selectedJob.title) {
          posSelect.selectedIndex = i;
          break;
        }
      }
    }

    const applySection = document.getElementById("applySection");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* OPEN POSITIONS */}
      <section className="open-positions">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">
              <i className="fas fa-bullhorn me-1"></i> Join Us
            </span>
            <h2 className="section-title">Open Positions</h2>
            <p className="text-secondary">
              Find the perfect role that matches your skills
            </p>
          </div>

          <div className="row g-4">
            {jobs.map((job, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="job-card">
                  <span className="job-badge">{job.type}</span>
                  <h3>{job.title}</h3>

                  <div className="job-location">
                    <i className="fas fa-map-marker-alt"></i> {job.location}
                  </div>

                  <p className="job-desc">{job.desc}</p>

                  <button
                    className="btn-view-job"
                    onClick={() => openModal(job)}
                  >
                    View Details{" "}
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
{showModal && selectedJob && (
  <>
    <div className="modal fade show d-block job-modal-overlay">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content job-modal">

          {/* HEADER */}
          <div className="modal-header job-modal-header">
            <h4 className="modal-title" id="modalJobTitle">
              {selectedJob.title}
            </h4>

            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={closeModal}
            ></button>
          </div>

          {/* BODY */}
          <div className="modal-body">

            <div className="row">

              <div className="col-md-6">
                <div className="job-detail-section">
                  <h6>
                    <i className="fas fa-map-marker-alt"></i> Location
                  </h6>
                  <p>{selectedJob.location}</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="job-detail-section">
                  <h6>
                    <i className="fas fa-clock"></i> Job Type
                  </h6>
                  <p>{selectedJob.type}</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="job-detail-section">
                  <h6>
                    <i className="fas fa-briefcase"></i> Experience
                  </h6>
                  <p>{selectedJob.exp}</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="job-detail-section">
                  <h6>
                    <i className="fas fa-dollar-sign"></i> Salary
                  </h6>
                  <p>Competitive + Benefits</p>
                </div>
              </div>

            </div>

            <div className="job-detail-section">
              <h6>
                <i className="fas fa-code"></i> Key Responsibilities
              </h6>
              <ul>
                <li>Design and develop high-quality software solutions</li>
                <li>Collaborate with cross-functional teams</li>
                <li>Write clean, maintainable, and efficient code</li>
              </ul>
            </div>

            <div className="job-detail-section">
              <h6>
                <i className="fas fa-tools"></i> Required Skills
              </h6>
              <ul>
                {selectedJob.skills.split(", ").map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="job-detail-section">
              <h6>
                <i className="fas fa-graduation-cap"></i> Qualifications
              </h6>
              <ul>
                <li>Bachelor's degree in Computer Science or related field</li>
                <li>Strong problem-solving and analytical skills</li>
              </ul>
            </div>

          </div>

          {/* FOOTER */}
          <div className="modal-footer job-modal-footer">
            <button className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>

            <button
              className="btn btn-primary apply-btn"
              onClick={handleApplyNow}
            >
              Apply Now <i className="fas fa-paper-plane ms-2"></i>
            </button>
          </div>

        </div>
      </div>
    </div>

    {/* BACKDROP */}
    <div className="modal-backdrop fade show"></div>
  </>
)}
    </>
  );
}