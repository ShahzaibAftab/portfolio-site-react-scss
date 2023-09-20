import React from "react";
import { TfiNewWindow } from "react-icons/tfi";
import { AiFillGithub } from "react-icons/ai";
import "./projects.css";
import DataApi from "./DataApi.js";
const Projects = () => {
  return (
    <section className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {DataApi.map(
          ({
            id,
            github,
            image,
            liveLink,
            desc,
            demo,
            title,
            tech1,
            tech2,
            tech3,
            tech4,
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="youtubeIcon">
                    <a href={demo} target="_blank">
                      <TfiNewWindow className="icon"></TfiNewWindow>
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank">
                      <AiFillGithub className="icon">jj</AiFillGithub>
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink}target="_blank">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">{desc}</div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                  <small>{tech4}</small>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Projects;
