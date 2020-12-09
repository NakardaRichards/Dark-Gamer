import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: black;
  height: 70px;
  display: flex;

  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);

  background-color: black;
  position: fixed;

  top: 0%;
  width: 100%;
  background: #1d1e21;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  opacity: 0.8;
  filter: alpha(opacity=50);
  z-index: 1000;

  @media screen and (max-width: 992px) {
    font-size: 10px;
    display: flex;
  }
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
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 992px) {
    font-size: 10px;
    display: flex;
  }
`;
