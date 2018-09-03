import React from "react";
import { Div, A } from "glamorous";
import colours from "../../Colours";
import StyledText from "../StyledText";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Div
        flexBasis="40%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={6}
        height={230}
        backgroundColor={this.props.disabled ? colours.white : colours.header}
        backgroundImage={`url(${this.props.image})`}
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        boxShadow={`3px 3px 50px -10px ${colours.header}`}
        margin={20}
        padding={20}
        position="relative"
        bottom={0}
        transition="bottom .3s"
        minWidth={300}
        maxWidth={450}
        cursor={this.props.disabled ? "not-allowed" : "pointer"}
        fontSize={22}
        css={{
          ":hover": {
            bottom: 5
          }
        }}
      >
        <A href={this.props.link}>
          <StyledText
            color={this.props.disabled ? colours.header : colours.white}
          >
            {this.props.name}
          </StyledText>
        </A>
      </Div>
    );
  }
}

export default Item;
