function minMovesToStables(reindeer, stables) {
  const sortedStables = stables.slice().sort();
  return reindeer
    .slice()
    .sort()
    .reduce((totalMoves, reindeerPos, index) => {
      return totalMoves + Math.abs(reindeerPos - sortedStables[index]);
    }, 0);
}
