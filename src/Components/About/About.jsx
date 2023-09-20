import { TbCloudDownload } from "react-icons/tb";
import img from "../../Assets/ProfilePic.jpg";
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
          I am a Success driven, determined, and passionate Full-Stack Engineer who excels in creating front-end experiences using React JS along with Numerous styling Libraries. I have a proven track record of successfully developing reuse-able component-based web applications and systems. Additionally, I possess extensive expertise in utilizing Node.js, Express.js, and MongoDB for the creation of Servers for Full-stack applications.
           <br />
            Ability to deliver Quality results while collaborating in rapidly
            changing work environments and team composition.
            <br />
            Enthusiatic, Passionate and always willing to learn more technologies and frameworks to become a
            better developer then before. Determined and result
            oriented.
          </h4>
          {/* <div className="aboutBtn">
            <a href="Resume.pdf" download="Resume.pdf" className="flex">
              Download CV <TbCloudDownload className="icon" />
            </a>
          </div> */}
        </div>

        <div className="aboutImgDiv">
          <img src={img} alt="Shahzaib Aftab" className="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
