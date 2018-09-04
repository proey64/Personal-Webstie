import React from "react";
import { Div } from "glamorous";
import { FaGithub } from "react-icons/fa";
import { Route } from "react-router-dom";
import Item from "./Item";
import ArtPortfolio from "./Entries/ArtPortfolio";
import ash from "../../Images/ash.png";
import personalsite from "../../Images/personalsite.png";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Div
        display="flex"
        justifyContent="center"
        maxWidth="1600"
        margin="auto"
        alignItems="center"
        flexWrap="wrap"
        paddingTop={30}
      >
        <Route exact path="/projects/artportfolio" component={ArtPortfolio} />
        <Item
          name="Ashliegh Williams Art Portfolio"
          image={ash}
          link="/projects/artportfolio"
        />
        <Item
          name="Personal Site"
          image={personalsite} /* icon={FaGithub}  */
          link="/projects/samuelpennington"
        />
        {/* <Item name="More coming soon" disabled />
        <Item name="More coming soon" disabled /> */}
      </Div>
    );
  }
}
