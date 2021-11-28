import React, { useRef } from "react";
import emailjs from "emailjs-com";


const ContactForm = function(props) {

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jsii82d', 'template_v4az0sn', form.current, 'user_eccPS4xJ5YtUyNNZHuRoB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div id="contact" className="content box">
      <form id="contact-form" ref={form} onSubmit={sendMail}>
        <div id="contact-left" className="contact-column item">
          <div id="1-form-group" className="first left form-group contact-left-item item">
            <label id="name-label" htmlFor="name-input">NAME</label>
            <input
              id="name-input"
              className="input"
              type="text"
              name="name"
              />
          </div>
          <div id="2-form-group" className="left form-group contact-left-item item">
            <label id="company-label" htmlFor="company-input">COMPANY</label>
            <input
              id="company-input"
              className="input"
              type="text"
              name="company"
              />
          </div>
          <div id="3-form-group" className="left form-group contact-left-item item">
            <label id="phone-label" htmlFor="phone-input">PHONE</label>
            <input
              id="phone-input"
              className="input"
              type="text"
              name="phone"
              />
          </div>
          <div id="4-form-group" className="last left form-group contact-left-item item">
            <label id="email-label" htmlFor="email-input">EMAIL</label>
            <input
              id="email-input"
              className="input"
              type="text"
              name="email"
              />
          </div>
        </div>
        <div id="contact-right" className="contact-column">
          <div id="right-form-group" className="message right form-group contact-right-item item">
            <label id="message-label" htmlFor="message-input">MESSAGE</label>
            <textarea
              id="message-input"
              className="input"
              name="message"
            />
            <button
              id="send-button"
              className="contact-right-item"
              value="Send"
              type="submit"
            >SEND</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;
