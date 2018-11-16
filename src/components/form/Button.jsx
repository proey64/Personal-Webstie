import React from "react";
import { Button } from "glamorous";
import colours from "../../constants/Colours";

const StyledButton = ({ type, loading, text, loadingText }) => (
  <Button
    type={type}
    width={300}
    height={40}
    borderRadius={8}
    backgroundColor={colours.header}
    color={colours.lightPink}
    fontSize={14}
    margin="auto"
    cursor="pointer"
  >
    {loading ? loadingText : text}
  </Button>
);

export default StyledButton;
