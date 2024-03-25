import React from "react";
import "./projects.css";

import all_projects from "../../all_projects";
import ProjectCard from "../Project Card/projectCard";

const Projects = () => {
  return (
    <section id='projects'>
      <h1 className="projectsTitle">Projects</h1>
      <div className="projectsCardWrapper">
        {all_projects.map((element,idx)=>{
          return <ProjectCard key={idx} img={element.img} liveLink={element.liveLink} title={element.title} repoLink={element.repoLink} desc={element.desc} tech={element.tech} />
        })}
      </div>

    </section>
  );
};

export default Projects;
