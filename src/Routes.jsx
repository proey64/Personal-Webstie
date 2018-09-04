import React from "react";
import { Route } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home";
import ArtPortfolio from "./components/Portfolio/Entries/ArtPortfolio";
import SamPennington from "./components/Portfolio/Entries/SamPennington";

import "./css/routes.css";

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 250,
    damping: 22
  });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.4
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

export default class Routes extends React.Component {
  render() {
    return (
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
      >
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Portfolio} />
        <Route path="/projects/artportfolio" exact component={ArtPortfolio} />
        <Route
          path="/projects/samuelpennington"
          exact
          component={SamPennington}
        />
      </AnimatedSwitch>
    );
  }
}
