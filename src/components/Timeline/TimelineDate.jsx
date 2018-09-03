import React from "react";
import { Div } from "glamorous";
import "../../css/timeline.css";

const TimelineDate = ({ show, fromDate, toDate }) => (
  <Div
    transition="all .5s ease"
    position="absolute"
    bottom={-30}
    width="100%"
    whiteSpace="nowrap"
    display={show ? "block" : "none"}
    fontWeight={600}
    fontSize={11}
    textAlign="center"
  >
    {`${fromDate} - ${toDate}`}
  </Div>
);

export default TimelineDate;
