
import { useParams } from "react-router-dom";


import BreadCrumb from "../component/BreadCrumb";
import Hero from "../component/Hero";
import projects from "../api_js/script.js"; // your data file
import "./Project_Detail.css";

function Project_Detail() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <>
      <BreadCrumb pageName="Project Overview" />

      <Hero
        HeroTitlePrefix={project.title}
        HeroTitleSuffix="Overview"
        HeroDescription="Track project progress, milestones, deliverables, and key information in one place."
      />
    </>
  );
}

export default Project_Detail;