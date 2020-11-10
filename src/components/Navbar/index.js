import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import Image from "../../images/home-gold.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <p style={{ color: "Gold", fontSize: "20px" }}>
            <img src={Image} width="30px" alt="ichigo" />
            Home
          </p>
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
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
