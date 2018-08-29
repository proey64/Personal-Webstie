import React from "react";
import { Div } from "glamorous";
import NavItem from "./NavItem";
import colours from "../../Colours";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Div
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor={colours.header}
        height={72}
        boxShadow={`0px 0px 8px ${colours.black}`}
        paddingLeft={32}
        paddingRight={32}
      >
        <NavItem text="Home" width={160} />
        <NavItem text="Websites" width={160} link="/portfolio" />
        <NavItem text="Projects" width={160} />
        <Div id="right-nav" marginLeft="auto">
          <NavItem text="Login" width={200} />
        </Div>
      </Div>
    );
  }
}

export default Header;
