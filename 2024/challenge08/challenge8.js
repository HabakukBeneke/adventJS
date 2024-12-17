function drawRace(indices, length) {
  return indices
    .map((value, index) => {
      let track = Array(length).fill("~");
      track[length * (value < 0) + value] = value === 0 ? "~" : "r";
      return (
        " ".repeat(indices.length - (index + 1)) +
        track.join("") +
        " /" +
        (index + 1)
      );
    })
    .join("\n");
}
