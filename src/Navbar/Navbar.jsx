import React from "react";
import { IoHomeSharp as HomeIcon } from "react-icons/io5";
import { MdOutlineWork as ExperienceIcon} from "react-icons/md";
import { BiSolidNetworkChart as ProjectIcon} from "react-icons/bi";
import { IoMdContact as ContactIcon} from "react-icons/io";

import "./Navbar.css";

const Navbar = () => {
  
  return (
    <div className="navicons">
          <a href="#" className="icon"><HomeIcon size={21}/></a>
          <a href="#experience" className="icon"><ExperienceIcon size={21}/></a>
          <a href="#project" className="icon"><ProjectIcon size={21}/></a>
          <a href="#contact" className="icon"><ContactIcon size={21}/></a>
    </div>
  );
};

export default Navbar;
