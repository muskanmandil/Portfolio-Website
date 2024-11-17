import React from "react";
import "./projectCard.css";

import visitIcon from '../../assets/icons/visit.svg';

const ProjectCard = (props) => {
  return (
    <div className="projectCard">
      <div className="projectImg" style={{background: `url(${props.img})`, backgroundSize: `calc(30vw - 3rem) 14.5vw`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <a href={props.liveLink} target="_blank" rel="noreferrer">
          <button className="projectLink">
            <img src={visitIcon} alt="" className="visitIcon" />
            Preview
          </button>
        </a>
      </div>
      <div className="projectCardHeader">
        <h2 className="projectTitle">{props.title}</h2>
        <a href={props.repoLink} className="projectRepoLink" target="_blank" rel="noreferrer">
          {props.repoLink.trim()!=="" ? "GitHub" : ""}
        </a>
      </div>
      <p className="projectDesc">{props.desc}</p>
      <div className="projectTechs">
        <span className="techTitle">Technologies : </span>
        {props.tech}
      </div>
    </div>
  );
};

export default ProjectCard;
