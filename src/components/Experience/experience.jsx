import React from "react";
import "./experience.css";

import all_experience from "../../all_experience";
import ExperienceDiv from "../Experience Div/experienceDiv";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="experienceTitle">Experience</h1>
      <div className="experienceTimeline">
        {all_experience.map((element) => {
          return (
            <ExperienceDiv
              logo={element.logo}
              position={element.position}
              company={element.company}
              duration={element.duration}
              summary={element.summary}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
