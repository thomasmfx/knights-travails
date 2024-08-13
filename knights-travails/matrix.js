export function outOfBoard(cordinates) {
  if (
    (cordinates[0] < 0 || cordinates[0] > 7)
    || (cordinates[1] < 0 || cordinates[1] > 7)
  ) return true;
};

export function buildMatrix() {
  let matrix = [];

  while (matrix.length < 8) {
    matrix.push([0, 0, 0, 0, 0, 0, 0, 0]);
  };

  return matrix; 
};
