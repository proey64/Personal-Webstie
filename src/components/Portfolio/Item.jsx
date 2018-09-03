import React from "react";
import { Div, Img } from "glamorous";
import colours from "../../Colours";
import StyledText from "../StyledText";
import "../../css/portfolio.css";

const ItemCss = {
  display: "inline",
  width: "40%",
  maxWidth: "500",
  borderRadius: 6,
  minHeight: 200,
  minWidth: 330,
  margin: 20,
  position: "relative",
  zIndex: 100,
  bottom: 0,
  transition: "all .3s ",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  overflowY: "hidden",
  fontSize: 22
};

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false
    };
  }

  showOverlay = () => this.setState({ showOverlay: true });

  hideOverlay = () => this.setState({ showOverlay: false });

  render() {
    return (
      <Div
        className={
          this.state.showOverlay && !this.props.disabled ? "portfolio-item" : ""
        }
        boxShadow={`3px 3px 50px -10px ${colours.header}`}
        cursor={this.props.disabled ? "not-allowed" : "pointer"}
        onMouseOver={this.showOverlay}
        onMouseLeave={this.hideOverlay}
        onFocus={this.showOverlay}
        onBlur={this.hideOverlay}
        {...ItemCss}
        css={{
          ":hover": {
            bottom: 5
          }
        }}
      >
        {this.state.showOverlay && (
          <Div
            position="absolute"
            height="100%"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex={30}
          >
            {this.props.icon ? (
              <this.props.icon size={100} color={colours.purple} />
            ) : (
              <StyledText
                color={this.props.disabled ? colours.header : colours.purple}
              >
                {this.props.name}
              </StyledText>
            )}
          </Div>
        )}
        <Img position="absolute" width="100%" src={this.props.image} />
      </Div>
    );
  }
}

export default Item;
