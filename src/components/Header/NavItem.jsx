import React from "react";
import { Div } from "glamorous";
import { Link, withRouter } from "react-router-dom";
import StyledText from "../StyledText";
import colours from "../../Colours";

const NavItem = ({ text, width, link }) => (
  <Div padding={16} cursor="pointer" flexBasis={width}>
    <Link to={link || "/"}>
      <StyledText color={colours.white}>{text}</StyledText>
    </Link>
  </Div>
);

export default withRouter(NavItem);
