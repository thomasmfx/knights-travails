function outOfBoard(n) {
  if (n < 0 || n > 7) return true;
};

export default function buildMatrix(knightPosition) {
  let matrix = [];
  let x = knightPosition[0];
  let y = knightPosition[1];

  while (matrix.length < 8) {
    matrix.push([0, 0, 0, 0, 0, 0, 0, 0]);
  };

  let positions = [
    [x - 2, y - 1],
    [x - 1, y - 2],

    [x - 2, y + 1],
    [x + 1, y - 2],

    [x - 1, y + 2],
    [x + 2, y - 1],

    [x + 1, y + 2],
    [x + 2, y + 1]
  ];

  for(let i = 0; i < positions.length; i++) {
    let xAxis = positions[i].shift();
    let yAxis = positions[i].shift();

    if (outOfBoard(xAxis) || outOfBoard(yAxis)) continue;

    matrix[xAxis][yAxis] = 1;
  };

  return matrix;
};
