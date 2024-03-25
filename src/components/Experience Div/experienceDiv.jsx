import React from "react";
import "./experienceDiv.css";

const ExperienceDiv = (props) => {
  return (
    <div className="experienceDiv">
      <div className="experienceTextContent">
        <h1 className="experiencePosition">{props.position}</h1>
        <h2 className="experienceCompany">{props.company}</h2>
        <h3 className="experienceDuration">{props.duration}</h3>
        <ul className="experienceSummary">
          {props.summary.map((element,idx)=>{
            return <li key={idx} dangerouslySetInnerHTML={{ __html: element}} />
          })}
        </ul>
      </div>
      <img src={props.logo} alt={props.company} className="companyLogo" />
    </div>
  );
};

export default ExperienceDiv;