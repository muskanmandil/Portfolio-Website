import React from "react";
import "./about.css";
import { Link } from "react-scroll";

import profileImg from "../../assets/images/profileImg.png";
import downloadIcon from "../../assets/icons/download.svg";
import sendIcon from "../../assets/icons/send.svg";

const About = () => {
  return (
    <section id="about">
      <img src={profileImg} alt="profile" className="profileImg" />
      <div className="aboutText">
        <p className="hello">👋🏻 Hello I'm</p>
        <p className="myName">Muskan Mandil</p>
        <p className="role">💻SOFTWARE ENGINEER + 🎨UI/UX DESIGNER </p>
        <p className="aboutPara">
          Senior @IET DAVV | Full-Stack Developer | SIH '23 Finalist
        </p>
        <div className="buttons">
          <a className="resumeBtn" href="https://bit.ly/muskan-mandil-resume" target="_blank" rel="noreferrer">
            Resume
            <img
              src={downloadIcon}
              alt="download Icon"
              className="downloadIcon"
            />
          </a>
          <Link to="contact" offset={-100} smooth={true}>
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
