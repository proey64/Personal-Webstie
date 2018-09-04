import React from "react";
import { Div, Img } from "glamorous";
import colours from "../../constants/Colours";
import "../../css/timeline.css";

const TimelineSummary = ({ onClick, image, title, Summary, job, isMobile }) => (
  <Div
    display={isMobile ? "block" : "flex"}
    flexWrap={isMobile ? "no-wrap" : "wrap"}
    flexDirection={isMobile ? "column" : "row"}
    maxWidth={900}
    alignContent="flex-start"
    justifyContent="flex-start"
    onClick={onClick}
    marginTop={isMobile ? 20 : 100}
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
      {!isMobile && <Img src={image} maxHeight={140} maxWidth={140} />}
    </Div>
    <Div display="flex" flex="1 1 0" flexDirection="column" paddingLeft={16}>
      <Div fontSize={isMobile ? 18 : 24} flex="1 1 200">
        {`${title} - ${job}`}
      </Div>
      <Div fontSize={isMobile ? 12 : 14} flex="1 1 0" marginTop={10}>
        <Summary />
      </Div>
    </Div>
  </Div>
);

export default TimelineSummary;
