import buildMatrix from "./matrix.js";

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
