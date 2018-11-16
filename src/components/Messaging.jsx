import React from "react";
import { Div } from "glamorous";
import Message from "./Message";

class Messaging extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Div display="flex" flexDirection="column" justifyContent="flex-start">
        oh hey
        <Message text="Hey baby" />
      </Div>
    );
  }
}

export default Messaging;
