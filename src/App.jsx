import "./index.css";
import About from "./About/About.jsx";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Experience from "./Experience/Experience.jsx";
import Project from "./Project/Project.jsx";
import Contact from "./Contact/Contact.jsx";
import Navbar from "./Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <About />
      <Navbar />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

export default App;
