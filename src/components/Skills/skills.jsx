import React from "react";
import "./skills.css";
import {
  programming_languages,
  web_development_technologies,
  tools,
} from "../../all_skills";
import SkillCard from "../Skill Card/skillCard";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skillsTitle">Skills</h1>
      <div className="skillsBody">
      <div className="skillsTypeContainer">
        <h3 className="skillsType">Programming Languages</h3>
        <div className="skillsWrapper">
          {programming_languages.map((element,idx) => {
            return <SkillCard key={idx} img={element.img} name={element.name} />;
          })}
        </div>
      </div>
      <div className="skillsTypeContainer">
        <h3 className="skillsType">Web-development Technologies</h3>
        <div className="skillsWrapper">
          {web_development_technologies.map((element,idx) => {
            return <SkillCard key={idx} img={element.img} name={element.name} />;
          })}
        </div>
      </div>
      <div className="skillsTypeContainer">
        <h3 className="skillsType">Tools</h3>
        <div className="skillsWrapper">
          {tools.map((element,idx) => {
            return <SkillCard key={idx} img={element.img} name={element.name} />;
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
