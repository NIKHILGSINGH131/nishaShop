import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp,BsInstagram} from 'react-icons/bs'

import { useRef } from 'react';
//import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_orvv1cv', 'template_becohee', form.current, '-C5aa84QWe2dkn8iE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>nishagsingh30@gmail.com</h5>
              <a href="mailto:nishagsingh30@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
              <BsInstagram className="contact__option-icon"/>
              <h4>Instagram</h4>
              <h5>nisha_g_singh</h5>
              {/* <a href="https://m.me/nikhilg.singh">Send a message</a> */}
              <a href="https://ig.me/m/nikhil_g_singh/" target='_blank'>Send a message</a>
              </article>

          <article className="contact__option">
              <BsWhatsapp className="contact__option-icon"/>
              <h4>WhatsApp</h4>
              <h5>+91 9740719342</h5>
              <a href="https://api.whatsapp.com/send?phone=9740719342" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of contact-iteams */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your Email'  required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact