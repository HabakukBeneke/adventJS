function fixGiftList(received, expected) {
  const countOccurrences = (items) => {
    return items.reduce((counter, item) => {
      counter[item] = (counter[item] || 0) + 1;
      return counter;
    }, {});
  };

  const receivedCounts = countOccurrences(received);
  const expectedCounts = countOccurrences(expected);

  const result = {
    missing: {},
    extra: {},
  };

  const allGifts = new Set([...received, ...expected]);

  for (const gift of allGifts) {
    const receivedCount = receivedCounts[gift] || 0;
    const expectedCount = expectedCounts[gift] || 0;

    if (expectedCount > receivedCount) {
      result.missing[gift] = expectedCount - receivedCount;
    } else if (receivedCount > expectedCount) {
      result.extra[gift] = receivedCount - expectedCount;
    }
  }

  return result;
}
