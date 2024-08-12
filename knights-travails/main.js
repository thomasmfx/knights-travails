import buildMatrix from "./matrix.js";

class Board {
  constructor(initialPosition = [4, 4]) {
    this._matrix = buildMatrix(initialPosition);
  };

  get matrix() {
    return this._matrix;
  };
};

function knightMoves(x, y) {

};

let board = new Board();
console.table(board.matrix);
