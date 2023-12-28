import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mfo8z85', 'template_gih0kag', form.current, 'CLBeMmpUYu_Lm5lvR')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email sent !');
      }, (error) => {
        console.log(error.text)
      });
  };

  return (
    <section id="contact">
        <h1 className="contactTitle">Get in Touch</h1>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name="from_name"/>
            <input type="email" className="email" placeholder="Your Email" name="from_email" />
            <textarea className='msg' name="message" rows="5" placeholder="Your Message"></textarea>
            <button type='submit' value='send' className="submitBtn">Submit</button>
            <div className="socialMediaIconWrapper">
                <a href="https://www.linkedin.com/in/muskan-mandil/"><img src={linkedin} alt="linkedin" className="socialMediaIcon" /></a>
                <a href="https://github.com/muskanmandil"><img src={github} alt="github" className="socialMediaIcon" /></a>
                <a href="https://www.instagram.com/muskan.mandil/"><img src={instagram} alt="instagram" className="socialMediaIcon" /></a>
            </div>
        </form>
    </section>
  );
};

export default Contact;
