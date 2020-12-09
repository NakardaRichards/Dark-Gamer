import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./Navbar";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home">
            <p>Home</p>
          </NavLink>

          <NavLink to="/aboutClub" activeStyle>
            About Club
          </NavLink>
          <NavLink to="/clubMembers" activeStyle>
            Club Members
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Details
          </NavLink>

          <NavLink to="/mods" activeStyle>
            Games Modded
          </NavLink>
          <NavLink to="/captureGallery" activeStyle>
            Capture Gallery
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
