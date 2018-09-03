import React from "react";
import { Div, Img } from "glamorous";
import colours from "../../Colours";
import "../../css/timeline.css";

const TimelineSummary = ({ onClick, image, title, Summary }) => (
  <Div
    display="flex"
    flexWrap="wrap"
    maxWidth={900}
    onClick={onClick}
    alignContent="center"
    justifyContent="center"
    marginTop={100}
    marginLeft={20}
    marginRight={20}
    padding={20}
    backgroundColor={colours.white}
    borderRadius={6}
    lineHeight={1.5}
    className="timeline-summary"
    boxShadow="0px 5px 100px rgb(27, 28, 60, 0.2)"
  >
    <Div
      display="flex"
      flex="1 1 200"
      flexDirection="column"
      justifyContent="center"
    >
      <Img src={image} maxHeight={140} maxWidth={140} />
    </Div>
    <Div display="flex" flex="1 1 0" flexDirection="column" paddingLeft={16}>
      <Div fontSize={24} flex="1 1 200">
        {title}
      </Div>
      <Div fontSize={14} flex="1 1 0" marginTop={10}>
        <Summary />
      </Div>
    </Div>
  </Div>
);

export default TimelineSummary;
