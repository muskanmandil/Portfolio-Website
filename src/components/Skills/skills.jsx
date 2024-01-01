import React from "react";
import "./skills.css";
import {
  programming_languages,
  development_technologies,
  platforms,
} from "../../all_skills";
import SkillCard from "../Skill Card/skillCard";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skillsTitle">Skills</h1>
      <div className="skillsTypeContainer">
        <h3 className="skillsType">Programming Languages</h3>
        <div className="skillsWrapper">
          {programming_languages.map((element) => {
            return <SkillCard img={element.img} name={element.name} />;
          })}
        </div>
      </div>
      <div className="skillsTypeContainer">
        <h3 className="skillsType">Development Technologies</h3>
        <div className="skillsWrapper">
          {development_technologies.map((element) => {
            return <SkillCard img={element.img} name={element.name} />;
          })}
        </div>
      </div>
      <div className="skillsTypeContainer">
        <h3 className="skillsType">Platforms</h3>
        <div className="skillsWrapper">
          {platforms.map((element) => {
            return <SkillCard img={element.img} name={element.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
