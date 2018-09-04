import React from "react";
import { Div } from "glamorous";
import { Link, withRouter } from "react-router-dom";
import StyledText from "../StyledText";
import colours from "../../constants/Colours";

const NavItem = ({ text, width, link, setActive, active }) => (
  <Div padding={16} cursor="pointer" flexBasis={width}>
    <Link to={link || "/"} onClick={() => setActive(text)}>
      <StyledText color={active ? colours.purple : colours.white}>
        {text}
      </StyledText>
    </Link>
  </Div>
);

export default withRouter(NavItem);
