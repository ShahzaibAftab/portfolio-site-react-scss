import { TbCloudDownload } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import img from "../../Assets/ProfilePic.jpeg";
import React from "react";
import "./about.css";
const About = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">
          About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            Software Engineer with expertise in Full Stack Web Development, specializing in MERN stack. I bring a blend of technical expertise with creative problem-solving techniques.

            Hands-on experience on numerous full stack projects. These projects have honed my technical skills with valuable insights into the core of web development.

             
            Ability to deliver Quality results while collaborating in rapidly
            changing work environments and team composition.
            <br />
            Impactful contributions that takes company to new heights.
            {/* Enthusiatic, Passionate and always willing to learn more technologies and frameworks to become a
            better developer then before. Determined and result
            oriented. */}
          </h4>
          <div className="aboutBtn">
            <a href="https://github.com/ShahzaibAftab" className="flex">
              Go to Github
              <FaGithub className="icon" />
              {/* <TbCloudDownload className="icon" /> */}
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img src={img} alt="Shahzaib Aftab" className="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
