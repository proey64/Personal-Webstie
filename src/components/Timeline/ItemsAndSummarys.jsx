import React from "react";
import { Div } from "glamorous";
import TimelineItem from "./TimelineItem";
import TimelineSummary from "./TimelineSummary";
import timeLineData from "./timeLineData";
import summaryData from "./Summarys/summaryData";
import colours from "../../constants/Colours";

const timeLineStyle = {
  width: "80%",
  display: "flex",
  position: "relative",
  marginTop: 100,
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: `${colours.header}`,
  height: 3
};

const timeLineStyleMobile = {
  width: 120,
  marginRight: 32,
  display: "flex",
  flexDirection: "column-reverse",
  position: "relative",
  marginTop: 100,
  alignItems: "flex-start",
  justifyContent: "space-between",
  height: 500
};

const ItemsAndSummarys = ({ toggleSummary, showSummarys, isMobile }) => {
  let css = timeLineStyle;
  if (isMobile) {
    css = timeLineStyleMobile;
  }

  return (
    <Div
      display="flex"
      flexDirection={isMobile ? "row" : "column"}
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Div {...css}>
        {Object.keys(timeLineData).map(key => (
          <TimelineItem
            key={timeLineData[key].fromDate}
            {...timeLineData[key]}
            toggleSummary={toggleSummary}
            active={showSummarys[key]}
            item={key}
            isMobile={isMobile}
          />
        ))}
      </Div>
      {Object.keys(summaryData).map(
        key =>
          showSummarys[key] && (
            <TimelineSummary
              isMobile={isMobile}
              key={summaryData[key].title}
              {...summaryData[key]}
            />
          )
      )}
    </Div>
  );
};

export default ItemsAndSummarys;
