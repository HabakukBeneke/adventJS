function execute(code) {
  let current = 0;

  for (let cursor = 0; cursor < code.length; cursor++) {
    const instruction = code[cursor];

    if (instruction === "+") {
      current++;
    } else if (instruction === "-") {
      current--;
    } else if (instruction === "[") {
      if (current === 0) {
        const closureIndex = code.indexOf("]", cursor);
        cursor = closureIndex;
      }
    } else if (instruction === "{") {
      if (current === 0) {
        const closureIndex = code.indexOf("}", cursor);
        cursor = closureIndex;
      }
    } else if (instruction === "]") {
      if (current !== 0) {
        const openingIndex = code.lastIndexOf("[", cursor);
        cursor = openingIndex - 1;
      }
    }
  }

  return current;
}
