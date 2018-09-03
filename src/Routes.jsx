import React from "react";
import { Switch, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Switch>
    );
  }
}
