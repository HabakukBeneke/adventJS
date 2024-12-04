function createXmasTree(height, ornament) {
  const lines = new Array(height + 2);
  const maxWidth = 2 * height - 1;

  for (let i = 0; i < height; i++) {
    const starsCount = 2 * i + 1;
    const spacesCount = (maxWidth - starsCount) / 2;
    lines[i] =
      "_".repeat(spacesCount) +
      ornament.repeat(starsCount) +
      "_".repeat(spacesCount);
  }

  const trunk =
    "_".repeat((maxWidth - 1) / 2) + "#" + "_".repeat((maxWidth - 1) / 2);
  lines[height] = trunk;
  lines[height + 1] = trunk;

  return lines.join("\n");
}
