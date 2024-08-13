export function outOfBoard(cordinates) {
  if (
    (cordinates[0] < 0 || cordinates[0] > 7)
    || (cordinates[1] < 0 || cordinates[1] > 7)
  ) return true;
};

export function buildMatrix() {
  let matrix = [];
  let x = knightPosition[0];
  let y = knightPosition[1];

  while (matrix.length < 8) {
    matrix.push([0, 0, 0, 0, 0, 0, 0, 0]);
  };

  return matrix; 
};

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
