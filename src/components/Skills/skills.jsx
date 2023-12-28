import React from "react";
import "./skills.css";
import all_skills from "../../all_skills";
import SkillCard from "../Skill Card/skillCard";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skillsTitle">Skills</h1>
      <div className="skillsCardWrapper">
        {all_skills.map((element) => {
          return <SkillCard img={element.img} name={element.name} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
