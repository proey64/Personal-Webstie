import React from "react";
import Responsive from "../Responsive";
import ItemsAndSummarys from "./ItemsAndSummarys";

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
      <React.Fragment>
        <Responsive.Mobile>
          <ItemsAndSummarys
            toggleSummary={this.toggleSummary}
            showSummarys={this.state.showSummarys}
            isMobile
          />
        </Responsive.Mobile>
        <Responsive.NotMobile>
          <ItemsAndSummarys
            toggleSummary={this.toggleSummary}
            showSummarys={this.state.showSummarys}
          />
        </Responsive.NotMobile>
      </React.Fragment>
    );
  }
}

export default Timeline;
