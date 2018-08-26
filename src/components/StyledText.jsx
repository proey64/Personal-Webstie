import React from "react";
import { Div } from "glamorous";
import colours from "../Colours";

const hoverCss = {
  ":hover": {
    color: colours.purple
  }
};

const StyledText = ({ color, children }) => (
  <Div color={color} display="inline-block" transition=".2s" css={hoverCss}>
    {children}
  </Div>
);

export default StyledText;
