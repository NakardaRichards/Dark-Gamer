import React from "react";
import "./index.css";
import "../css/contact.css";
import "../images/cont.png";

export const Contact = () => {
  return (
    <div className="contacts">
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <h1>Emails: </h1>
      <ul>
        <li>
          <a href="#">xxx-xxx-xxxx</a>
        </li>
        <li>
          <a href="#">xxx-xxx-xxxx</a>
        </li>
        <li>
          <a href="#">xxx-xxx-xxxx</a>
        </li>
        <li>
          <a href="#">xxx-xxx-xxxx</a>
        </li>
      </ul>
      <h1>Telephone#:</h1>
      <ul>
        <li>xxx-xxx-xxxx</li>
        <li>xxx-xxx-xxxx</li>
        <li>xxx-xxx-xxxx</li>
        <li>xxx-xxx-xxxx</li>
      </ul>
    </div>
  );
};

export default Contact;
