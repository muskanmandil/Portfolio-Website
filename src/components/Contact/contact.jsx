import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import leetcode from "../../assets/icons/leetcode.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form values
    const formValues = new FormData(form.current);
    const fromName = formValues.get("from_name").trim();
    const fromEmail = formValues.get("from_email").trim();
    const message = formValues.get("message").trim();

    // Check if any of the fields are empty
    if (!fromName || !fromEmail || !message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_mfo8z85",
        "template_gih0kag",
        form.current,
        "CLBeMmpUYu_Lm5lvR"
      )

      .then(
        () => {
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Error");
        }
      );
  };

  return (
    <section id="contact">
      <h1 className="contactTitle">Get in Touch</h1>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="sendBtn">
          Send Message
        </button>
        <div className="socialMediaIconWrapper">
          <a href="https://www.linkedin.com/in/muskan-mandil/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" className="socialMediaIcon" />
          </a>
          <a href="https://github.com/muskanmandil" target="_blank" rel="noreferrer">
            <img src={github} alt="github" className="socialMediaIcon" />
          </a>
          <a href="https://leetcode.com/u/muskan_mandil/" target="_blank" rel="noreferrer">
            <img src={leetcode} alt="leetcode" className="socialMediaIcon" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
