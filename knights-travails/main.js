import { buildMatrix, outOfBoard } from "./matrix.js";

function equalPositions(p1, p2) {
  if ((p1[0] === p2[0]) && (p1[1] === p2[1])) {
    return true
  };

  return false;
};

function printSteps(steps) {
  let text = `You made it in ${steps.length - 1} moves! Here's your path: \n`;

  for (const step of steps) {
    text += ` [${step}] \n`
  };

  return text;
};

class Board {
  constructor() {
    this._matrix = buildMatrix();
  };

  get matrix() {
    return this._matrix;
  };

  possibleMoves(position) {
    let x = position[0];
    let y = position[1];
  
    let cordinates = [
      [x - 2, y - 1],
      [x - 1, y - 2],
  
      [x - 2, y + 1],
      [x + 1, y - 2],
  
      [x - 1, y + 2],
      [x + 2, y - 1],
  
      [x + 1, y + 2],
      [x + 2, y + 1]
    ];
  
    return cordinates.filter((cord) => !outOfBoard(cord));
  };

  updateMatrix(currentPosition) {
    this._matrix = buildMatrix(currentPosition);
  };
};

function knightMoves(start, end) {

};

let board = new Board();
