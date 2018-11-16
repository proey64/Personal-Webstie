import { Control } from "react-redux-form";
import React from "react";
import { Div } from "glamorous";
import colours from "../../constants/Colours";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { model, type, label } = this.props;
    return (
      <Div flexDirection="row">
        <Div flex="1 1 auto" textAlign="center">
          {label}
        </Div>
        <Control.text model={model} type={type} className=".input" />
      </Div>
    );
  }
}

export default Input;
