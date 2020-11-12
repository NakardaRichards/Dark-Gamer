import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./Navbar";
// import Image from "../../images/home-gold.png";
//import "../../pages/index.css";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <p>Home</p>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/aboutClub" activeStyle>
            About Club
          </NavLink>
          <NavLink to="/clubMembers" activeStyle>
            Club Members
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Details
          </NavLink>

          <NavLink to="/trophies" activeStyle>
            Trophies Earned
          </NavLink>
          <NavLink to="/games" activeStyle>
            Games
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
