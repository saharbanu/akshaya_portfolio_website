import React from "react";
import "./about.css";
import CV from "../documents/Akshayafinalresume.pdf";
import myphoto from "../images/myphoto.png";

const About = () => {
  return (
    <div className="section">
      <div className="name-cv">
        <div className="name">
          <h2>Akshaya Imayam Sahar</h2>
        </div>
        <div className="resume">
          <a href={CV} download>
            <button className="CV">Download CV</button>
          </a>
        </div>
      </div>
      <div className="about-me">
        <div className="intro-sec">
          <h2>About me</h2>
          <p>
            As a front-end Developer I am passionate to create user-friendly,
            dynamic and visually appealing websites and web applications. I am
            familiar with HTML , CSS , Javascript, front-end framework such as
            React and also version control systems such as Git which enables me
            to work collaboratively with other developers. I am passionate about
            staying up to date with the latest web technologies and techniques,
            and I am always eager to learn and improve my skills.
          </p>
        </div>
        <div className="myphoto">
          <img className="my_photo" src={myphoto} alt="myphoto" />
        </div>
      </div>
    </div>
  );
};

export default About;
