import React from "react";
import { Div } from "glamorous";
import NavItem from "./NavItem";
import colours from "../../Colours";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* <FacebookLogin
  appId="2162872150420975"
  autoLoad
  fields="name,email,picture"
  callback={this.handleLogin}
/> */

  render() {
    return (
      <Div
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor={colours.lightPink}
        height={72}
        // backgroundImage={`linear-gradient(to right, ${colours.lightPink} , ${
        // colours.pink
        // })`}
        // borderBottom={`2px solid ${colours.pink}`}
        boxShadow={`0px 0px 8px ${colours.black}`}
      >
        <NavItem text="Home" width={160} />
        <NavItem text="Websites" width={160} />
        <NavItem text="Projects" width={160} />
        <Div id="right-nav" marginLeft="auto">
          <NavItem text="Login" width={200} />
        </Div>
      </Div>
    );
  }
}

export default Header;
