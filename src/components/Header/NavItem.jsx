import React from "react";
import { NavLink } from "react-router-dom";
import colours from "../../constants/Colours";

const NavItem = ({ text, width, link, exact }) => (
  <NavLink
    to={link}
    exact={exact}
    style={{
      color: "white",
      width,
      textDecoration: "none"
    }}
    activeStyle={{
      fontWeight: "bold",
      color: colours.purple
    }}
  >
    {text}
  </NavLink>
);

export default NavItem;
