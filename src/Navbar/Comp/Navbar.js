import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);

  background-color: black;
  position: sticky;

  top: 0%;
  width: 100%;
  background: #1d1e21;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  opacity: 0.8;
  filter: alpha(opacity=50);
`;

export const NavLink = styled(Link)`
  color: #cecece;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #5c5edc;
  }

  &:hover {
    text-decoration: none;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;

    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;
