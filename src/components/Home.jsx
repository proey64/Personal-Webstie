import React from "react";
import { Div } from "glamorous";
import Me from "./Me";
import Timeline from "./Timeline/Timeline";

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
      <React.Fragment>
        <Div
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          paddingLeft={32}
          paddingRight={32}
          flexBasis={900}
          margin="auto"
          paddingTop={40}
          flexWrap="wrap"
          height={240}
        >
          <Div fontSize={32}>Sam Pennington</Div>
          <Me
            makeMeFlip={this.makeMeFlip}
            deg={this.state.deg}
            displayMe={this.state.displayMe}
          />
        </Div>
        <Timeline />
      </React.Fragment>
    );
  }
}

export default Home;
