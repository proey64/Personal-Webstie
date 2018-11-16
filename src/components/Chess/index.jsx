import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Board from "./Board";
import { generateBoard } from "../../utils/chess";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.createBoard();
  }

  onBeforeDragStart = () => {
    /* ... */
  };

  onDragStart = poo => {
    console.log(poo);
    /* ... */
  };

  // onDragUpdate = poo => {
  //   const { piece: dragPiece, position: dragPosition } = JSON.parse(
  //     draggableId
  //   );

  //   const { piece: dropPiece, position: dropPosition } = JSON.parse(
  //     droppableId
  //   );
  // };

  onDragEnd = drag => {
    const { board } = this.state;
    const {
      draggableId,
      destination: { droppableId }
    } = drag;

    const { piece: dragPiece, position: dragPosition } = JSON.parse(
      draggableId
    );

    const { piece: dropPiece, position: dropPosition } = JSON.parse(
      droppableId
    );

    const newBoard = board.map(square => {
      if (square.position === dropPosition) {
        return { position: dropPosition, colour: "white", piece: dragPiece };
      }

      if (
        square.position === dragPosition &&
        square.position !== dropPosition
      ) {
        return { position: dragPosition, colour: "white", piece: null };
      }

      return square;
    });

    this.setState({ board: newBoard });
  };

  createBoard() {
    const board = generateBoard();

    this.setState({ board });
  }

  render() {
    const { board } = this.state;

    return (
      <DragDropContext
        // onBeforeDragStart={this.onBeforeDragStart}
        // onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Board onClick={() => this.updateBoard()} board={board} />
      </DragDropContext>
    );
  }
}

export default Game;
