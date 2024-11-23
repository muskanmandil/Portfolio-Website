import React, { useRef } from "react";
import "./projects.css";

import all_projects from "../../all_projects";
import ProjectCard from "../Project Card/projectCard";

const Projects = () => {
  const scrollRef = useRef(null);

  const getScrollAmount = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 620) {
      return screenWidth * 0.75;
    } else if (screenWidth <= 1024) {
      return screenWidth * 0.5;
    } else if (screenWidth <= 1280) {
      return screenWidth * 0.27;
    }else{
      return 384;
    }
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  };

  return (
    <section id="projects">
      <h1 className="projectsTitle">Projects</h1>
      <div className="scrollContainer">
        <button className="scrollBtn left" onClick={scrollLeft}>
          &lt;
        </button>

        <div className="projectsCardWrapper" ref={scrollRef}>
          {all_projects.map((element, idx) => {
            return (
              <ProjectCard
                key={idx}
                img={element.img}
                liveLink={element.liveLink}
                title={element.title}
                repoLink={element.repoLink}
                desc={element.desc}
                tech={element.tech}
              />
            );
          })}
        </div>

        <button className="scrollBtn right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Projects;
