import "./App.css";
import React from "react";
import About from "../src/Components/About/About";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "../src/Components/Home/Home";
import Skill from "../src/Components/Skill/Skill";
import Footer from "../src/Components/Footer/Footer";
import Projects from "../src/Components/Projects/Projects";
import Contact from "../src/Components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact/>
      <Footer/> 
    </>
  );
};

export default App;
