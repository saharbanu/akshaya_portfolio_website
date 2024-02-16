import React from "react";
import { FaLinkedin as LinkedIn } from "react-icons/fa";
import { FaGithub as Github } from "react-icons/fa";
import { FaWhatsapp as Whatsapp } from "react-icons/fa";
import { MdEmail as Email } from "react-icons/md";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdDone as Done } from "react-icons/md";
import { useState } from "react";
import { IoLocationSharp as Location} from "react-icons/io5";

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8uly12c", "template_wpthbsa", form.current, {
        publicKey: "KdHtAi2z0ZQuvOnAn",
      })
      .then(() => {
        e.target.reset();
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      });
  };

  return (
    <div className="section" id="contact">
      <header className="header">
        <br />
        <br />
        <h5>Get in Touch</h5>
        <h2>Contact</h2>
      </header>
      <div className="contact-div">
        <div className="contact-details1">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="your name" required />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your email id"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              cols="37"
              rows="7"
              placeholder="your message"
              name="message"
              required
            ></textarea>
            <div className="button-wrapper">
              <button type="submit">Send Message</button>
              {showNotification && (
                <div className="notification">
                  <Done />
                  <p>Message sent successfully!</p>
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="contact-details2">
          <div className="social-links">
            <h3>Contact Information</h3>
            <a href="/" target="_blank" rel="noreferrer" >
              <section className="whatsapp">
                <Whatsapp />
                <p>+421 915379409</p>
              </section>
            </a>
            <a href="mailto:akshayaimayamsahar@gmail.com" target="_blank" rel="noreferrer">
              <section className="email">
                <Email />
                <p>akshayaimayamsahar@gmail.com</p>
              </section>
            </a>
            <section className="location">
                <Location />
                <p>Bratislava,Slovakia</p>
            </section>
            <div className="link-hub">
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/akshaya-i-7aa5bb230"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                className="github"
                href="https://github.com/saharbanu"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
