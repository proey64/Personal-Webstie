// import { King, queen, bishop, knight, Pawn } from "./components/Chess/pieces";
import {
  FaChessBishop as Bishop,
  FaChessKing as King,
  FaChessRook as Rook,
  FaChessKnight as Knight,
  FaChessQueen as Queen,
  FaChessPawn as Pawn
} from "react-icons/fa";

const pawnCondition = sq =>
  [9, 10, 11, 12, 13, 14, 15, 16, 49, 50, 51, 52, 53, 54, 55, 56].includes(sq);
const castleCondition = sq => [1, 8, 57, 64].includes(sq);
const knightCondition = sq => [2, 7, 58, 63].includes(sq);
const kingCondition = sq => [5, 60].includes(sq);
const queenCondition = sq => [4, 61].includes(sq);
const bishopCondition = sq => [3, 6, 59, 62].includes(sq);

const getPiece = position => {
  const colour = "white";
  const squareColour = position % 2 === 1 ? "white" : "black";
  let piece = null;

  if (pawnCondition(position)) {
    piece = "pawn";
  }

  if (castleCondition(position)) {
    piece = "castle";
  }

  if (knightCondition(position)) {
    piece = "knight";
  }

  if (kingCondition(position)) {
    piece = "king";
  }

  if (queenCondition(position)) {
    piece = "queen";
  }

  if (bishopCondition(position)) {
    piece = "bishop";
  }

  return { position, colour, piece, squareColour };
};

export function generateBoard() {
  const board = [];

  for (let i = 1; i <= 64; i += 1) {
    board.push(getPiece(i));
  }

  console.log(board);
  return board;
}

export function startingSetup(board) {
  const startingBoard = board;
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      if (pawnCondition(i)) {
        startingBoard[i][j].piece = Pawn;
      }

      if (castleCondition(i, j)) {
        startingBoard[i][j].piece = Rook;
      }

      if (knightCondition(i, j)) {
        startingBoard[i][j].piece = Knight;
      }

      if (queenCondition(i, j)) {
        startingBoard[i][j].piece = Queen;
      }

      if (kingCondition(i, j)) {
        startingBoard[i][j].piece = King;
      }

      if (bishopCondition(i, j)) {
        startingBoard[i][j].piece = Bishop;
      }
    }
  }

  return startingBoard;
}

// const castleCondition = (row, col) =>
//   (row === 0 || row === 7) && (col === 0 || col === 7);

// const knightCondition = (row, col) =>
//   (row === 0 || row === 7) && (col === 1 || col === 6);

// const kingCondition = (row, col) =>
//   (row === 0 && col === 4) || (row === 7 && col === 4);

// const queenCondition = (row, col) =>
//   (row === 0 && col === 3) || (row === 7 && col === 3);

// const bishopCondition = (row, col) =>
//   (row === 0 || row === 7) && (col === 2 || col === 5);

// const resolveColour = (row, col) => {
//   if (row % 2 === 1) {
//     if (col % 2 === 0) {
//       return "black";
//     }

//     return "white";
//   }

//   if (col % 2 === 0) {
//     return "white";
//   }

//   return "black";
// };

// export function generateBoard() {
//   const board = [];
//   for (let i = 0; i < 8; i += 1) {
//     board[i] = [];
//     for (let j = 0; j < 8; j += 1) {
//       board[i][j] = {
//         piece: null,
//         position: `${i}${j}`,
//         colour: resolveColour(i, j)
//       };
//     }
//   }

//   console.log(board);
//   return board;
// }
