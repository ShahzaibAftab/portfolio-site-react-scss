import React from "react";
import { TbBrandReact } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { DiPhp } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { SiHtml5 } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { GrNode } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiElementor } from "react-icons/si";
import { SiWoo } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import "./skill.css";
const Skill = () => { 
  return (
    <section className="skills container section">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          Skills - Full Stack Developer
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      {/* skill container */}
      <div className="skillsContainer grid">
        {/* Single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title"> Core</h2>
            <span className="subTitle"></span>
          </div>
          <div className="generalSkills">
            {/* single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiHtml5 className="icon" />
              </div>
              <span className="skillName">HTML5</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoCss3 className="icon" />
              </div>
              <span className="skillName">CSS3</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className="icon" />
              </div>
              <span className="skillName">Javascript</span>
            </div>

          </div>
        </div>
     

      
      {/* skill container */}
  
        {/* Single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title"> Libraries & Preprocessors</h2>
            <span className="subTitle"></span>
          </div>
          <div className="generalSkills">
            {/* single skill div */}

            <div className="singleSkill">
              <div className="iconBox flex">
                <BsBootstrap className="icon" />
              </div>
              <span className="skillName">Bootsrap5</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className="icon" />
              </div>
              <span className="skillName">SASS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReact className="icon" />
              </div>
              <span className="skillName">ReactJS</span>
            </div>

          </div>
        </div>

        
  
      {/* skill container */}
          {/* Single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title"> Backend Technologies</h2>
            <span className="subTitle"></span>
          </div>
          <div className="generalSkills">
            {/* single skill div */}
           
            <div className="singleSkill">
              <div className="iconBox flex">
                <GrNode className="icon" />
              </div>
              <span className="skillName">NodeJS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiExpress className="icon" />
              </div>
              <span className="skillName">Express JS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMongodb className="icon" />
              </div>
              <span className="skillName">MongoDB</span>
            </div>

          </div>
        </div>

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title"> Others</h2>
            <span className="subTitle"></span>
          </div>
          <div className="generalSkills">
            {/* single skill div */}
           
           

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiWordpress className="icon" />
              </div>
              <span className="skillName">Wordpress</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiElementor className="icon" />
              </div>
              <span className="skillName">Elementor</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <DiPhp className="icon" />
              </div>
              <span className="skillName">PHP</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <GrMysql className="icon" />
              </div>
              <span className="skillName">MySQL</span>
            </div>

          </div>
        </div>

        </div>  

    </section>
  );
};

export default Skill;
