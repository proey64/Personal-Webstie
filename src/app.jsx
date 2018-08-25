import React from "react";
import ReactDOM from "react-dom";
import { Div } from "glamorous";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Div />;
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
