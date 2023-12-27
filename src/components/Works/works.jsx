import React from "react";
import "./works.css";

import PortfolioImg1 from '../../assets/portfolio-1.png'
import PortfolioImg2 from '../../assets/portfolio-2.png'
import PortfolioImg3 from '../../assets/portfolio-3.png'
import PortfolioImg4 from '../../assets/portfolio-4.png'
import PortfolioImg5 from '../../assets/portfolio-5.png'
import PortfolioImg6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <img src={PortfolioImg1} alt="" className="worksImg" />
        <img src={PortfolioImg2} alt="" className="worksImg" />
        <img src={PortfolioImg3} alt="" className="worksImg" />
        <img src={PortfolioImg4} alt="" className="worksImg" />
        <img src={PortfolioImg5} alt="" className="worksImg" />
        <img src={PortfolioImg6} alt="" className="worksImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
