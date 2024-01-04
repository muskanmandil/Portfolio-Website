import React from "react";
import "./educationDiv.css";

const EducationDiv = (props) => {
  return (
    <div className="educationDiv">
      <div className="educationTextContent">
        <h1 className="degreeTitle">{props.degree}</h1>
        <h2 className="degreeInstitute">{props.institute}</h2>
        <p className="degreeGrades">{props.grades}</p>
      </div>
      <img src={props.logo} alt={props.institute} className="instituteLogo" />
    </div>
  );
};

export default EducationDiv;
