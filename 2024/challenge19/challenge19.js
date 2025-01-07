function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  const boxWeights = [10, 5, 2, 1];
  let result = [];

  while (weight > 0) {
    const boxWeight = boxWeights.find((w) => w <= weight);

    const boxLines = boxRepresentations[boxWeight];
    const baseLine = boxLines.at(-1);

    if (result.length > 0) {
      let updatedBase = [...result[0]];
      for (let i = 0; i < baseLine.length; i++) {
        updatedBase[i] = baseLine[i];
      }
      result[0] = updatedBase.join("").trim();
    } else {
      result[0] = baseLine.trim();
    }

    result.unshift(...boxLines.slice(0, -1));

    weight -= boxWeight;
  }

  return result.join("\n");
}
