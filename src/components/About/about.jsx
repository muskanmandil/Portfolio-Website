import React from "react";
import "./about.css";
import { Link } from "react-scroll";

import profileImg from "../../assets/images/profileImg.png";
import downloadIcon from "../../assets/icons/download.svg";
import MuskanMandil_Resume_2024 from "../../assets/MuskanMandil_Resume_2024.pdf";
import sendIcon from "../../assets/icons/send.svg";

const About = () => {
  return (
    <section id="about">
      <img src={profileImg} alt="profile" className="profileImg" />
      <div className="aboutText">
        <p className="hello">👋🏻 Hello I'm</p>
        <p className="myName">Muskan Mandil</p>
        <p className="role">💻FULL-STACK DEVELOPER + 🎨UI/UX DESIGNER </p>
        <p className="aboutPara">
          {/* I am proficient in full-stack development with a solid understanding of in C++. I enjoy designing engaging UI/UX and developing them from scratch. */}
          Senior @IET DAVV | SIH '23 Finalist | 2★@codechef
        </p>
        <div className="buttons">
          <a className="resumeBtn" href={MuskanMandil_Resume_2024} target="_blank" rel="noreferrer">
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
