import { AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { TbArrowBigRightLines } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";
import React from "react";
import "./home.css";
const Home = () => {
  return (
    <section id="home" className="home section">
      {/* Only visible to wider screen */}
      <div className="leftIcons">
  <div className="socials grid">
    <a href='https://github.com/ShahzaibAftab/' target={'_blank'}>
      <AiFillGithub className='icon'/>
    </a>
    
    <a href='https://wa.me/+923354975505' target={'_blank'}>
      <BsWhatsapp className='icon'/>
    </a>

    <a href='https://mail.google.com/mail/u/0/#inbox?compose=VpCqJZNXSpRmKxCCnRMZTSCQdrSppndrscfZmTHBhsNJZFMDPllfLCdQcfNhSHFsjCqBVGv' target={'_blank'}>
      <CgMail className='icon'/>
    </a>
    <div className='line'></div>
  </div>
</div>

      <div className="container homeContainer">
        <span className="introText">Hi I'm.</span>
        <h1 className="title">Shahzaib Aftab</h1>
        <span className="subTitle">
          I develope scalable, clean, reusable component based code for Full-Stack
          Web Applications.
        </span>
        <p className="homeParagraph">
          I code within required coding standards and style to serve the exact
          need of problem.
        </p>
        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className="icon" />
            </a>
          </button>
          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down</h6>
              <FiChevronsDown className="icon" />
            </a>
          </div>
        </div>
      </div>
      {/* right Div visible at wider screen */}
      <div className="rightEmail">
        <div className="emailAddress">
            <a href="https://mailto:shahhzaibaftab@gmail.com" target="_blank">shahhzaibaftab@gmail.com</a>
          
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
