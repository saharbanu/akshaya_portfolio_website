import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div className="section" id="project">
      <header className="header">
        <br />
        <br />
        <h5>My work</h5>
        <h2>Projects</h2>
      </header>
      <div className="project">
        <div>
          <h3>Task Management Application</h3>
        </div>
        <div>
          <p>
            The task management mini project involves building a web-based
            application that allows users to manage tasks with basic CRUD
            operations. The front-end is developed using javascript for a
            dynamic and user-friendly interface, complemented by CSS. On the
            back-end, the application is powered by Node.js. The data is stored
            in a simple SQL database, and the back-end exposes RESTful API
            endpoints to handle task operations. Git is employed for version
            control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
