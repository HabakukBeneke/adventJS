function createFrame(names) {
  const longestName = Math.max(...names.map((name) => name.length));
  const horizontalSize = longestName + 4;

  const firstAndLastLane = "*".repeat(horizontalSize);
  const magicFrameArray = names.map(
    (name) => `* ${name.padEnd(longestName)} *`
  );
  return [firstAndLastLane, ...magicFrameArray, firstAndLastLane].join("\n");
}
