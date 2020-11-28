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
          <a href="nakardarichards3@gmail.com">nakardarichards3@gmail.com</a>
        </li>
        <li>
          <a href="kevardo@stu.ncu.edu.jm">kevardo@stu.ncu.edu.jm</a>
        </li>
        <li>
          <a href="cbrown33@stu.ncu.edu.jm">cbrown33@stu.ncu.edu.jm</a>
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
