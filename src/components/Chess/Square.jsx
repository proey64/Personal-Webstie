import React from "react";
import { Div } from "glamorous";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Piece from "./Piece";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { squareSize, colour, position, piece } = this.props;
    return (
      <Div
        height={squareSize}
        width={squareSize}
        border="1px solid grey"
        color={colour === "white" ? "black" : "white"}
      >
        <Droppable
          droppableId={JSON.stringify({ position, piece })}
          type="PERSON"
        >
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {provided.placeholder}
              {piece ? (
                <Piece piece={piece} colour="blue" position={position} />
              ) : (
                <Draggable
                  draggableId={JSON.stringify({ position, piece })}
                  index={0}
                >
                  {provide => (
                    <div
                      ref={provide.innerRef}
                      {...provide.draggableProps}
                      {...provide.dragHandleProps}
                    >
                      <Div
                        width={60}
                        height={60}
                        padding={10}
                        cursor="pointer"
                      />
                    </div>
                  )}
                </Draggable>
              )}
            </div>
          )}
        </Droppable>
      </Div>
    );
  }
}

export default Square;
