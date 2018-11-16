import React from "react";
import { Div } from "glamorous";
import { Draggable } from "react-beautiful-dnd";
import {
  FaChessBishop as Bishop,
  FaChessKing as King,
  FaChessRook as Rook,
  FaChessKnight as Knight,
  FaChessQueen as Queen,
  FaChessPawn as Pawn
} from "react-icons/fa";

class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  resolveIcon = type => {
    switch (type) {
      case "king":
        return King;
      case "queen":
        return Queen;
      case "knight":
        return Knight;
      case "pawn":
        return Pawn;
      case "castle":
        return Rook;
      case "bishop":
        return Bishop;
      default:
        return null;
    }
  };

  render() {
    const { position, piece } = this.props;
    const Icon = this.resolveIcon(piece);
    return (
      <Draggable draggableId={JSON.stringify({ position, piece })} index={0}>
        {provide => (
          <div
            ref={provide.innerRef}
            {...provide.draggableProps}
            {...provide.dragHandleProps}
          >
            <Div padding={10} cursor="pointer">
              {Icon && <Icon size={56} />}
            </Div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Piece;
