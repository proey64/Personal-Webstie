import React from "react";
import { Switch, Route } from "react-router-dom";


class Routes extends React.Component {

render() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />        
    </Switch>
  )}
}