import React from "react";
import { Div } from "glamorous";
import StyledText from "../StyledText";
import colours from "../../Colours";

const NavItem = ({ text, width }) => (
  <Div padding={16} cursor="pointer" flexBasis={width}>
    <StyledText color={colours.black}>{text}</StyledText>
  </Div>
);

export default NavItem;
