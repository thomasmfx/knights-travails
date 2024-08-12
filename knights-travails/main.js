import buildMatrix from "./matrix.js";

class Board {
  constructor(initialPosition = [4, 4]) {
    this._matrix = buildMatrix(initialPosition);
  };

  get matrix() {
    return this._matrix;
  };

  updateMatrix(currentPosition) {
    this._matrix = buildMatrix(currentPosition);
  };
};

function knightMoves(start, end) {

};

let board = new Board();
