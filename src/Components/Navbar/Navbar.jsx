import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import "./navbar.css";
const Navbar = () => {
  // Toggle navbar at small screen
  const [active, setActive] = useState("navBar");

  // bring navbar from top
  const showNavBar = () => {
    setActive("navBar activeNavbar");
  };

  // Remove Navbar
  const RemoveNavBar = () => {
    setActive("navBar");
  };

  //add background to header
  const [activeHeader, setactiveHeader] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setactiveHeader("header activeHeader");
    } else {
      setactiveHeader("header");
    }
  };
  window.addEventListener("scroll", addBg);
  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 style={{marginLeft:'20px'}} className="logo">
          <a href="#home">Shahzaib Aftab</a>
        </h1>
      </div>
      <div className={active}>
        <ul className="navLists" onClick={RemoveNavBar}>
          <li className="navItem">
            <a href="#about" className="navLink">
              <span className="headerNumber">1.</span> About{" "}
            </a>
          </li>

          <li className="navItem">
            <a href="#Skills" className="navLink">
              <span className="headerNumber">2.</span> Skills{" "}
            </a>
          </li>

          <li className="navItem">
            <a href="#Contact" className="navLink">
              <span className="headerNumber">3.</span> Contact
            </a>
          </li>

          <li className="navItem">
            <a href="#Projects" className="navLink">
              <span className="headerNumber">4.</span> Projects
            </a>
          </li>

          <button className="btn">
            <a href="Resume.pdf" download="Resume.pdf">Resume</a>
          </button>
        </ul>
        <div className="closeNavBar" onClick={RemoveNavBar}>
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div onClick={showNavBar} style={{marginRight:'20px'}} className="toggleNavBar">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
