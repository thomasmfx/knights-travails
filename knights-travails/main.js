function buildAdjMatrix(knightPosition) {
  let matrix = [];
  let row = [];
  let x = knightPosition[0];
  let y = knightPosition[1];

  while (row.length < 8) {
    row.push(0);
  };
  while (matrix.length < 8) {
    matrix.push(row);
  };

  return matrix;
};

class Board {
  constructor(initialPosition = [4, 4]) {
    this._matrix = buildAdjMatrix(initialPosition);
  };

  get matrix() {
    return this._matrix;
  };
};

function knightMoves(x, y) {

};
