import React from "react";
import "./education.css";

import all_education from "../../all_education";
import EducationDiv from "../Education Div/educationDiv";

const Education = () => {
  return (
    <section id="education">
      <h1 className="educationTitle">Education</h1>
      <div className="educationTimeline">
        {all_education.map((element, idx) => {
          return (
            <EducationDiv
              key={idx}
              logo={element.logo}
              degree={element.degree}
              institute={element.institute}
              grades={element.grades}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Education;
