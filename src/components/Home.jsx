import React from "react";
import { Div, B } from "glamorous";
import Me from "./Me";
import Timeline from "./Timeline/Timeline";
import Responsive from "./Responsive";

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
    return (
      <Div display="flex" flexDirection="column" justifyContent="flex-start">
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
          <Div fontSize={18} flex="0 0 70%" maxWidth={500}>
            <B fontSize={20} lineHeight={2}>
              Sam Pennington
            </B>
            <br />I am a junior software developer based in London, primarily I
            have worked on the front end of web applications using React, though
            I have had some exposure to Node.js.
            <br />I am currently looking for my next Junior Development role,
            and I am also happy to discuss any freelance jobs.
          </Div>
          <Responsive.Desktop>
            <Me
              makeMeFlip={this.makeMeFlip}
              deg={this.state.deg}
              displayMe={this.state.displayMe}
            />
          </Responsive.Desktop>
        </Div>
        <Timeline />
      </Div>
    );
  }
}

export default Home;
