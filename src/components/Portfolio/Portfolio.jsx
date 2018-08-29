import React from "react";
import { Div } from "glamorous";
import Item from "./Item";

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
        alignItems="center"
        flexWrap="wrap"
        paddingTop={30}
      >
        <Item name="Ashliegh Williams Art Portfolio" />
        <Item name="More coming soon" disabled />
        <Item name="More coming soon" disabled />
        <Item name="More coming soon" disabled />
      </Div>
    );
  }
}
