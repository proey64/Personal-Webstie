import React from "react";
import { Div } from "glamorous";
import colours from "../../Colours";
import TimelineItem from "./TimelineItem";
import TimelineSummary from "./TimelineSummary";
import timeLineData from "./timeLineData";
import summaryData from "./Summarys/summaryData";

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

const initialSummarys = {
  sgs: false,
  uob: false,
  sm: false,
  maryEvans: false,
  heed: false
};

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSummarys: initialSummarys
    };
  }

  toggleSummary = async summaryType => {
    const showSummarys = Object.assign({}, initialSummarys, {
      [summaryType]: true
    });
    this.setState({ showSummarys });
  };

  render() {
    return (
      <Div display="flex" flexDirection="column" alignItems="center">
        <Div {...timeLineStyle}>
          {Object.keys(timeLineData).map(key => (
            <TimelineItem
              key={timeLineData[key].fromDate}
              {...timeLineData[key]}
              toggleSummary={this.toggleSummary}
              active={this.state.showSummarys[key]}
              item={key}
            />
          ))}
        </Div>
        {Object.keys(summaryData).map(
          key =>
            this.state.showSummarys[key] && (
              <TimelineSummary
                key={summaryData[key].title}
                {...summaryData[key]}
              />
            )
        )}
      </Div>
    );
  }
}

export default Timeline;
