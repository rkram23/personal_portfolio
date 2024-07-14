import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>HIRE OR CONTACT ME...</h1>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">CONTACT ME ➤</button>
      </form>
    </div>
  );
}

export default Contact;
