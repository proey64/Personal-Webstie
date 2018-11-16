import React from "react";
import ReactDOM from "react-dom";
import { Div } from "glamorous";
import { BrowserRouter } from "react-router-dom";
import Amplify, { Auth } from "aws-amplify";
import Header from "./components/Header/Header";
import Routes from "./Routes";
import config from "../config";
import "./css/form.css";

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

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "message",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentAuthenticatedUser();
      this.userHasAuthenticated(true);
    } catch (e) {
      this.userHasAuthenticated(false);
    }
  }

  userHasAuthenticated = authenticated =>
    this.setState({ isAuthenticated: authenticated });

  logOut = () => {
    Auth.signOut();
    this.userHasAuthenticated(false);
  };

  render() {
    const authProps = {
      userHasAuthenticated: this.userHasAuthenticated,
      isAuthenticated: this.state.isAuthenticated,
      logOut: this.logOut
    };
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
          <Header authProps={authProps} />
          <Routes authProps={authProps} />
        </Div>
      </BrowserRouter>
    );
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
