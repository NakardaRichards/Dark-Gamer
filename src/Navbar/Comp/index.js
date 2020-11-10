import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./Navbar";
// import Image from "../../images/home-gold.png";
import "../../pages/index2.css";

const Navbar = () => {
  return (
    <>
    
      <Nav className="nav">
        <NavLink to="/index">
          <p>
            {/* <img src={Image} width="30px" alt="ichigo" /> */}
            Home
          </p>
        </NavLink>
        <Bars />
        <NavMenu >
          <NavLink to="/aboutClub" activeStyle>
            About Club
          </NavLink>
          <NavLink to="/clubMembers" activeStyle>
            Club Members
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Details
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
