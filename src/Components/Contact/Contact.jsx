import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'

//=======React-icons======
import { AiFillInstagram } from 'react-icons/ai'
import { TbArrowBigRightLine } from 'react-icons/tb'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const notify = () => toast.success("Your message has sent!");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_361gb5k', 'template_kbznz5n', e.target, 'Bs28WcN_Kigd9r5cQ')
    notify()
    e.target.reset()
  }
  return (
    <>
      <ToastContainer />
      <section id='Contact' className="contact section container">
        <div className="sectionTitle">
          <span className="titleNumber">05.</span>
          <h5 className="titleText">
            Contact
            <div className="underline">
              <span></span>
            </div>
          </h5>
        </div>

        <div className="contactContainer grid">
          <h3>Message me</h3>
          <div className="socialContacts grid">
            {/* <h3>Talk to me</h3> */}

            <div className="cards grid">
              <div className="card">
                <div>
                  <AiFillInstagram className='icon'></AiFillInstagram>
                </div>
                <h4>Instagram</h4>
                <span className='userName'>@Shahza1baftab</span>
                <div>
                  <a href='https://www.instagram.com/shahza1baftab/?hl=en' className='flex'>Send messege
                    <TbArrowBigRightLine className='icon'>
                    </TbArrowBigRightLine></a>
                </div>
              </div>
            </div>

            <div className="cards grid">
              <div className="card">
                <div>
                  <AiFillLinkedin className='icon'></AiFillLinkedin>
                </div>
                <h4>LinkedIn</h4>
                <span className='userName'>@Shahzaib Aftab</span>
                <div>
                  <a href='https://www.linkedin.com/in/shahzaibaftab/?originalSubdomain=pk' className='flex'>Send messege
                    <TbArrowBigRightLine className='icon'>
                    </TbArrowBigRightLine></a>
                </div>
              </div>
            </div>

            <div className="cards grid">
              <div className="card">
                <div>
                  <FaWhatsapp className='icon'></FaWhatsapp>
                </div>
                <h4>Contact</h4>
                <span className='userName'>(+92) 3354975505</span>
                <div>
                  <a href='https://wa.me/+923354975505' className='flex'>Send messege
                    <TbArrowBigRightLine className='icon'>
                    </TbArrowBigRightLine></a>
                </div>
              </div>
            </div>

            <div className="cards grid">
              <div className="card">
                <div>
                  <AiFillInstagram className='icon'></AiFillInstagram>
                </div>
                <h4>Email</h4>
                <span className='userName'>@Shahhzaibaftab@gmail.com</span>
                <div>
                  <a href='https://mail.google.com/mail/u/0/#inbox?compose=VpCqJZNXSpRmKxCCnRMZTSCQdrSppndrscfZmTHBhsNJZFMDPllfLCdQcfNhSHFsjCqBVGv' className='flex'>Send messege
                    <TbArrowBigRightLine className='icon'>
                    </TbArrowBigRightLine></a>
                </div>
              </div>
            </div>

          </div>

          <div className="form grid">
            <h3> Send me an email directly</h3>

            <form onSubmit={sendEmail}>
              <input type='text' name='name' id='name' placeholder='Enter your name' />

              <input type='email' name='emailfrom' id='emailfrom' placeholder='Enter your email' />

              <textarea name='message' id='' placeholder='Enter your messege'>

              </textarea>
              <button className='formBtn' type='submit'>
                Send Email
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact