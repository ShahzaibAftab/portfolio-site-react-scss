import React from "react";
import { TbBrandReact, TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { BsBootstrap, BsShadows } from "react-icons/bs";
import { IoLogoSass } from "react-icons/io";
import { DiPhp } from "react-icons/di";
import { GrMysql, GrNode } from "react-icons/gr";
import { SiMongodb, SiWordpress, SiElementor, SiExpress, SiChakraui, SiMaterialdesign, 
         SiPrisma, SiPostgresql, SiJsonwebtokens, SiRedux, SiAmazons3, SiReactquery, 
         SiZod,
         SiTailwindcss,
         SiWoocommerce} from "react-icons/si";
import { MdEmail } from "react-icons/md"; // for Resend
import "./skill.css";
import { FaReact } from "react-icons/fa";

const Skill = () => { 
  return (
    <section id="Skills" className="skills container section">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          Skills 
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="skillsContainer grid">
        {/* Modern Development Stack */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Libraries & Framework</h2>
            <span className="subTitle"></span>
          </div>
          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaReact className="icon" />
              </div>
              <span className="skillName">React Js</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandNextjs className="icon" />
              </div>
              <span className="skillName">NextJS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandTypescript className="icon" />
              </div>
              <span className="skillName">TypeScript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiReactquery className="icon" />
              </div>
              <span className="skillName">TanStack</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiRedux className="icon" />
              </div>
              <span className="skillName">Redux</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiTailwindcss className="icon" />
              </div>
              <span className="skillName">TailwindCSS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <BsShadows className="icon" />
              </div>
              <span className="skillName">Shadcn</span>
            </div>

          </div>
        </div>

        {/* Database & Cloud */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Database & Cloud</h2>
            <span className="subTitle"></span>
          </div>
          <div className="generalSkills">

          <div className="singleSkill">
              <div className="iconBox flex">
                <SiAmazons3 className="icon" />
              </div>
              <span className="skillName">AWS S3</span>
            </div>

          <div className="singleSkill">
              <div className="iconBox flex">
                <SiPrisma className="icon" />
              </div>
              <span className="skillName">Prisma</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiPostgresql className="icon" />
              </div>
              <span className="skillName">PostgreSQL</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMongodb className="icon" />
              </div>
              <span className="skillName">MongoDB</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <GrMysql className="icon" />
              </div>
              <span className="skillName">MySQL</span>
            </div>

          </div>
        </div>

        {/* Backend & Authentication */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Backend & Auth</h2>
            <span className="subTitle"></span>
          </div>
          <div className="generalSkills">
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
                <SiJsonwebtokens className="icon" />
              </div>
              <span className="skillName">JWT</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiZod className="icon" />
              </div>
              <span className="skillName">Zod</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <MdEmail className="icon" />
              </div>
              <span className="skillName">Resend</span>
            </div>
          </div>
        </div>

        {/* Others */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Others</h2>
            <span className="subTitle"></span>
          </div>
          <div className="generalSkills">
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
                <SiWoocommerce className="icon" />
              </div>
              <span className="skillName">WooCommerce</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <DiPhp className="icon" />
              </div>
              <span className="skillName">PHP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;