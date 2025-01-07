function findMissingNumbers(nums) {
  const uniqueNums = new Set(nums);
  const n = Math.max(...nums);
  const missingNumbers = [];

  for (let i = 1; i <= n; i++) {
    if (!uniqueNums.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}
