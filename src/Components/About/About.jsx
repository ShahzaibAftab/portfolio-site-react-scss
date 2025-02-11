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
            Full Stack Developer with over 1.5 years of Experience in architecting and deploying production-grade applications. Specialized in modern web technologies including Next.js, React, Node.js, and cloud services (AWS). Distinguished track record of reducing application load times by 80% through advanced optimization techniques and delivering high-performance, scalable solutions across diverse industries.
            Core strengths include:

    <h4>- Proficiency in Next.js development, implementing sophisticated features including SSR, SSG, and ISR for optimal performance and SEO</h4>
    <h4>- Expertise in database architecture using PostgreSQL and MongoDB, along with Prisma ORM for efficient data modeling and management</h4>
    <h4>- Security implementation using JWT authentication, data encryption, and secure payment gateway integrations (Stripe)</h4>
    <h4>- Expertise in state management (Redux, MobX, Zustand) and modern frontend frameworks, ensuring scalable and maintainable codebases</h4>
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
