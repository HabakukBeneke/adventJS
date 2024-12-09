function organizeShoes(shoes) {
  const bootCounts = new Map();
  const pairs = [];

  for (const { type, size } of shoes) {
    const key = `${type}-${size}`;
    bootCounts.set(key, (bootCounts.get(key) || 0) + 1);

    const oppositeKey = `${type === "I" ? "R" : "I"}-${size}`;
    if (bootCounts.get(oppositeKey)) {
      pairs.push(size);
      bootCounts.set(key, bootCounts.get(key) - 1);
      bootCounts.set(oppositeKey, bootCounts.get(oppositeKey) - 1);
    }
  }

  return pairs;
}
