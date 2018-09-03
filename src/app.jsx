import React from "react";
import ReactDOM from "react-dom";
import { Div } from "glamorous";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Routes from "./Routes";

const appWideCSS = {
  fontFamily: "Roboto, sans-serif",
  fontSize: 14,
  fontSmoothing: "antialiased",
  backgroundColor: "#f6f1fc",
  height: "100vh",
  css: {
    ":link": {
      textDecoration: "none !important"
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Div
          {...appWideCSS}
          css={{
            ":link": {
              textDecoration: "none !important"
            }
          }}
        >
          <Header />
          <Routes />
        </Div>
      </BrowserRouter>
    );
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
