function countPossiblePaths(n, m) {
  const rowsCount = Math.min(n, m); // for optimal CPU cache usage
  const colsCount = Math.max(n, m);

  const dp = Array.from({length: colsCount}).fill(1); // initially filed by ones

  for (let i = 1; i < rowsCount; i++) {
    for (let j = 1; j < colsCount; j++) {
      dp[j] = dp[j - 1] + dp[j];
    }
  }

  return dp[colsCount - 1];
}

console.log(countPossiblePaths(1, 3));
console.log(countPossiblePaths(2, 2));
console.log(countPossiblePaths(2, 3));
console.log(countPossiblePaths(3, 3));
console.log(countPossiblePaths(4, 4));
console.log(countPossiblePaths(4, 5));
