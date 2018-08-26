import React from "react";
import ReactDOM from "react-dom";
import { Div } from "glamorous";
import Header from "./components/Header/Header";

const appWideCSS = {
  fontFamily: "Roboto, sans-serif",
  fontSize: 14,
  backgroundColor: "#f6f1fc",
  height: "100%"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogin = stuff => {
    console.log(stuff);
  };

  render() {
    return (
      <Div {...appWideCSS}>
        <Header />
      </Div>
    );
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
