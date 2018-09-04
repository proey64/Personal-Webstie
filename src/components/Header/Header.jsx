import React from "react";
import { Div, A } from "glamorous";
import { FaGithub } from "react-icons/fa";
import NavItem from "./NavItem";
import colours from "../../constants/Colours";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsActive: false,
      homeActive: false
    };
  }

  componentDidMount() {
    if (window.location.pathname === "/") {
      this.setHomeActive();
    }

    if (window.location.pathname === "/projects") {
      this.setProjectsActive();
    }
  }

  setProjectsActive = () =>
    this.setState({ projectsActive: true, homeActive: false });

  setHomeActive = () =>
    this.setState({ projectsActive: false, homeActive: true });

  setActive = navItem => {
    switch (navItem) {
      case "Sam Pennington":
        this.setHomeActive();
        break;
      case "Projects":
        this.setProjectsActive();
        break;
      default:
        break;
    }
  };

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
        fontSize={18}
      >
        <NavItem
          text="Sam Pennington"
          width={160}
          setActive={this.setActive}
          active={this.state.homeActive}
        />
        <NavItem
          text="Projects"
          width={160}
          link="/projects"
          setActive={this.setActive}
          active={this.state.projectsActive}
        />
        <Div id="right-nav" marginLeft="auto">
          <A href="https://github.com/proey64">
            <FaGithub size={32} color={colours.white} cursor="pointer" />
          </A>
        </Div>
      </Div>
    );
  }
}

export default Header;
