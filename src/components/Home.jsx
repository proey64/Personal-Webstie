import React from "react";
import { Div } from "glamorous";
import Me from "./Me";
import Timeline from "./Timeline/Timeline";
import Responsive from "./Responsive";
import MySummary from "./MySummary";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deg: 0,
      displayMe: true
    };
  }

  makeMeFlip = () => {
    this.setState({
      deg: this.state.deg + 180,
      displayMe: !this.state.displayMe
    });
  };

  render() {
    const { makeMeFlip } = this;
    const { deg, displayMe } = this.state;
    return (
      <Div
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
      >
        <Div
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          paddingLeft={32}
          paddingRight={32}
          paddingTop={40}
          flexWrap="wrap"
          height={240}
        >
          <Responsive.Mobile>
            <MySummary fontSize={16} titleSize={18} textAlign="center" />
          </Responsive.Mobile>
          <Responsive.NotMobile>
            <MySummary fontSize={16} titleSize={18} textAlign="left" />
          </Responsive.NotMobile>
          <Responsive.Desktop>
            <Me makeMeFlip={makeMeFlip} deg={deg} displayMe={displayMe} />
          </Responsive.Desktop>
        </Div>
        <Timeline />
      </Div>
    );
  }
}

export default Home;
