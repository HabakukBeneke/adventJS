function moveTrain(board, mov) {
  const moves = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };
  let y = 0,
    x = 0;

  while (!board[y].includes("@")) y++;
  x = board[y].indexOf("@");

  const [dy, dx] = moves[mov];
  const ny = y + dy,
    nx = x + dx;

  return ny < 0 ||
    ny >= board.length ||
    nx < 0 ||
    nx >= board[0].length ||
    board[ny][nx] === "o"
    ? "crash"
    : board[ny][nx] === "*"
    ? "eat"
    : "none";
}
