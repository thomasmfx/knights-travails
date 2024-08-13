import { buildMatrix, outOfBoard } from "./matrix.js";

function equalPositions(p1, p2) {
  return (p1[0] === p2[0]) && (p1[1] === p2[1]) ? true : false;
};

function printSteps(steps) {
  let text = `You made it in ${steps.length - 1} moves! Here's your path: \n`;
  for (const step of steps) text += ` [${step}] \n`

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
  if (outOfBoard(start) || outOfBoard(end)) throw new Error('Invalid position');

  let board = new Board();
  let root = board.possibleMoves(start);
  let steps = [start];

  let queue = [...root];
  let visited = [];
  let currentNode = start;

  while (!equalPositions(currentNode, end)) {
    let neighbors = board.possibleMoves(currentNode);
    let alreadyVisited = visited.filter((node) => equalPositions(node, currentNode)).shift();
    
    alreadyVisited
    ? steps = [start]
    : visited.push(currentNode);
    
    for (const neighbor of neighbors) queue.push(neighbor);
    
    currentNode = queue.shift();
    steps.push(currentNode);
  };

  return printSteps(steps);
};

console.log('\n')
console.log(knightMoves([4, 4], [4, 4]));
console.log('\n')
console.log(knightMoves([0, 0], [3, 3]));
console.log('\n')
console.log(knightMoves([3, 3], [4, 5]));
console.log('\n')
console.log(knightMoves([0, 0], [7, 7]));
