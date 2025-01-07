function generateGiftSets(gifts) {
  const result = [];

  const combine = (start, path, k) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < gifts.length; i++) {
      path.push(gifts[i]);
      combine(i + 1, path, k);
      path.pop();
    }
  };

  for (let size = 1; size <= gifts.length; size++) {
    combine(0, [], size);
  }

  return result;
}
