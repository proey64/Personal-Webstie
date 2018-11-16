import React from "react";
import { Div } from "glamorous";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.squareSize = 80;
  }

  render() {
    const { board } = this.props;
    const gridSizes = Array(8)
      .fill(`${this.squareSize}px`)
      .join(" ");
    return (
      <Div display="grid" gridTemplateColumns={gridSizes} marginTop={32}>
        {board &&
          board.map(square => (
            <Square
              key={square.position}
              {...square}
              squareSize={this.squareSize}
            />
          ))}
      </Div>
    );
  }
}

export default Board;
