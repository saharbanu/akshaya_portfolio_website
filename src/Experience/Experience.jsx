import React from "react";
import "./experience.css";
import html from "../images/htmllogo.svg";
import CSS from "../images/css.svg";
import JS from "../images/javascript.svg";
import ReactJS from "../images/react.svg";
import nodeJS from "../images/Nodejslogo.svg";
import expressJS from "../images/Expressjslogo.svg";
import mongo from "../images/mongodb-icon.svg";
const Experience = () => {
  return (
    <div className="section" id="experience">
      <div class="header">
        <h5>What skills I have</h5>
        <h2>My experience</h2>
      </div>

      <div className="parent-container">
        <div className="flip-class">
          <div className="container">
            <div className="front">
              <p>HTML</p>
              <img className="images" src={html} alt="html" />
            </div>
            <div className="back">
              <p>Basic</p>
            </div>
          </div>
          <div className="container">
            <div className="front">
              <p>CSS</p>
              <img className="images" src={CSS} alt="CSS" />
            </div>
            <div className="back">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="container">
            <div className="front">
              <p>Javascript</p>
              <img src={JS} alt="Javascript" className="images" />
            </div>
            <div className="back">
              <p>Intermediate</p>
            </div>
          </div>
          <div className="container">
            <div className="front">
              <p>React</p>
              <img
                src={ReactJS}
                alt="ReactJS"
                className="images"
              />
            </div>
            <div className="back">
              <p>Basic</p>
            </div>
          </div>
          <div className="container">
            <div className="front">
              <p>NodeJs</p>
              <img
                src={nodeJS}
                id="node"
                alt="nodeJS"
              />
            </div>
            <div className="back">
              <p>Basic</p>
            </div>
          </div>
          <div className="container">
            <div className="front">
              <p>ExpressJs</p>
              <img src={expressJS} alt="expressJS" className="images" />
            </div>
            <div className="back">
              <p>Basic</p>
            </div>
          </div>
          <div className="container">
            <div className="front">
              <p>MongoDB</p>
              <img className="images" src={mongo} alt="mongodb" />
            </div>
            <div className="back">
              <p>Basic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
