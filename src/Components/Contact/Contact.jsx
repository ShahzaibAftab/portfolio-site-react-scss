import React, { useRef } from 'react'
import './contact.css'


//=======React-icons======
import {AiFillInstagram} from 'react-icons/ai'
import {TbArrowBigRightLine} from 'react-icons/tb'
import {AiFillLinkedin} from 'react-icons/ai'

//=====React emailjs=======
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_brudfro', 'template_bzwib8n'
    , form.current, 'QYaif8PXy5MVZBv94')
      e.target.reset() //reset after submit
      if(e)
      {
        alert('Your messege has been sent');
      }
  };

  return (
    <section id='Contact' className="contact section container">
       <div className="sectionTitle">
        <span className="titleNumber">04.</span>
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
  <form ref={form} onSubmit={sendEmail}>
    <input type='text' name='name' placeholder='Enter your name'/>
    
    <input type='email' name='email' placeholder='Enter your email'/>

<textarea name='message' id='' placeholder='Enter your messege'>

</textarea>
<button className='formBtn' type='submit'>
Send Email
</button>
      </form>
</div>

      </div>
    </section>
  )
}

export default Contact