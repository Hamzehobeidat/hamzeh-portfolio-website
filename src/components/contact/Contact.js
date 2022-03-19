import React, {useRef} from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_28s57ha',
        'service_28s57ha',
        form.current,
        'fEZBQhX-thpgtndKs',
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>hobeidat@aspire-infotech.net</h5>
            <a href="mailto:hobeidat@aspire-infotech.net" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>hamzeh.obaidat</h5>
            <a href="https://m.me/hamzeh.obaidat.5" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>0770690155</h5>
            <a
              href="https://api.whatsapp.com/send?phone=0770690155"
              target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="name" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
