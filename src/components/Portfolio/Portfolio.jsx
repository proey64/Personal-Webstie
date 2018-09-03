import React from "react";
import { Div } from "glamorous";
import { FaGithub } from "react-icons/fa";
import Item from "./Item";
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
        <Item
          name="Ashliegh Williams Art Portfolio"
          image={ash}
          link="http://ashleighwilliams.co.uk/"
        />
        <Item name="Personal Site" image={personalsite} icon={FaGithub} />
        <Item name="More coming soon" disabled />
        <Item name="More coming soon" disabled />
      </Div>
    );
  }
}
