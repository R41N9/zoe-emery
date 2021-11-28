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
    <div id="contact" className="content">
      <form id="contact-form" ref={form} onSubmit={sendMail}>
        <div className="first form-group">
          <label for="name">NAME</label>
          <input
            type="text"
            name="name"
          />
        </div>
        <div className="form-group">
          <label for="company">COMPANY</label>
          <input
            type="text"
            name="company"
          />
        </div>
        <div className="form-group">
          <label for="phone">PHONE</label>
          <input
            type="text"
            name="phone"
          />
        </div>
        <div className="last form-group">
          <label for="email">EMAIL</label>
          <input
            type="text"
            name="email"
          />
        </div>
        <div className="message form-group">
          <label for="message">MESSAGE</label>
          <textarea
            name="message"
          />
          <button
            id="send-button"
            value="Send"
            type="submit"
          >SEND</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;
