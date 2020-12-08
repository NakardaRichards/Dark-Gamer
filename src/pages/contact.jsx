import React from "react";
import "./index.css";

import "../css/contact.css";
import "../images/cont.png";

const handleClick = () => {
  alert("Your Message has been successfully sent.");
};

export const Contact = () => {
  return (
    <React.Fragment>
      <div className="contacts">
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <h1>Emails: </h1>
        <ul>
          <li>
            <a href="nakardarichards3@gmail.com">nakardarichards3@gmail.com</a>
          </li>
          <li>
            <a href="kevardo@stu.ncu.edu.jm">kevardo@stu.ncu.edu.jm</a>
          </li>
        </ul>
        <h1>Telephone#:</h1>
        <ul>
          <li>xxx-xxx-xxxx</li>
          <li>xxx-xxx-xxxx</li>
        </ul>
      </div>
      <div class="container5">
        <h1 class="title">Contact Form</h1>
        <div class="wrapper">
          <div class="contact">
            <h3 class="contact-us">Contact Us</h3>

            <form id="contactForm">
              <p class="name-field">
                <label>
                  Name <span>*</span>
                </label>
                <input type="text" name="name" id="name" required />
              </p>
              <p class="email-field">
                <label>
                  Email <span>*</span>
                </label>
                <input type="email" name="email" id="email" required />
              </p>
              <p class="phone-field">
                <label>Phone</label>
                <input type="text" name="phone" id="phone" />
              </p>
              <p class="message-field full">
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>
              <p class="required-field">
                Required field <span>*</span>
              </p>

              <p class="submit-button">
                <button
                  id="butn2"
                  onClick={handleClick}
                  type="submit"
                  disabled="true"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="This form doesn't work on Netlify so clone it locally and remove disable tags"
                >
                  Submit
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
