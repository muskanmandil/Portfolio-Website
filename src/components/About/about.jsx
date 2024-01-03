import React from "react";
import "./about.css";
import { Link } from "react-scroll";

import profileImg from "../../assets/profileImg.png";
import downloadIcon from "../../assets/download.svg";
import Resume from "../../assets/resume.pdf";
import sendIcon from "../../assets/send.svg";

const About = () => {
  return (
    <section id="about">
      <img src={profileImg} alt="profile" className="profileImg" />
      <div className="aboutText">
        <p className="hello">👋🏻 Hello I'm</p>
        <p className="myName">Muskan Mandil</p>
        <p className="role">🎨DESIGNER + 💻DEVELOPER</p>
        <p className="aboutPara">
          I love creating beautiful user-interfaces and passionate towards
          developing them. I am well versed in technologies ranging from Figma,
          Web Development and C++.
        </p>
        <div className="buttons">
          <a className="resumeBtn" href={Resume} download="MuskanMandil_Resume" >
            Resume
            <img
              src={downloadIcon}
              alt="download Icon"
              className="downloadIcon"
            />
          </a>
          <Link to="contact" offset={-100}>
            <button className="contactBtn">
              Get in Touch
              <img src={sendIcon} alt="send Icon" className="sendIcon" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
