import React from "react";
import { Div, A } from "glamorous";
import { FaGithub } from "react-icons/fa";
import NavItem from "./NavItem";
import colours from "../../constants/Colours";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      authProps: { isAuthenticated, logOut }
    } = this.props;
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
        fontSize={18}
      >
        <NavItem text="Sam Pennington" width={160} exact link="/" />
        <NavItem text="Projects" width={160} link="/projects" />
        <NavItem text="Message" width={160} link="/messaging" />
        <NavItem text="Chess" width={160} link="/chess" />
        <A href="https://github.com/proey64">
          <FaGithub size={32} color={colours.white} cursor="pointer" />
        </A>
        <Div id="right-nav" marginLeft="auto">
          {isAuthenticated ? (
            <Div onClick={() => logOut()}>Log out</Div>
          ) : (
            <NavItem text="Login" width={160} link="/login" />
          )}
        </Div>
      </Div>
    );
  }
}

export default Header;
