function isRobotBack(moves) {
  let posX = 0;
  let posY = 0;

  const moveList = moves.split("");
  const directions = {
    U: [1, 0],
    R: [0, 1],
    D: [-1, 0],
    L: [0, -1],
  };
  const reverseDirections = {
    U: "D",
    D: "U",
    R: "L",
    L: "R",
  };

  const visitedMoves = {};

  for (let index = 0; index < moveList.length; index++) {
    let currentMove = moveList[index];
    let moveVector;

    if (currentMove === "*") {
      moveVector = directions[moveList[index + 1]];
    } else if (currentMove === "?") {
      currentMove = moveList[index + 1];
      if (visitedMoves[currentMove]) {
        moveVector = [0, 0];
        currentMove = "-";
      } else {
        moveVector = directions[currentMove];
      }
      index++;
    } else if (currentMove === "!") {
      currentMove = reverseDirections[moveList[index + 1]];
      moveVector = directions[currentMove];
      index++;
    } else {
      moveVector = directions[currentMove];
    }

    visitedMoves[currentMove] ||= true;

    posY += moveVector[0];
    posX += moveVector[1];
  }

  return (posX === 0 && posY === 0) || [posX, posY];
}
