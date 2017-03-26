function findBestPath(matrix) {
  const rowsCount = matrix.length;
  const colsCount = matrix[0].length;

  const dp = [0].concat(matrix[0]);

  for (let i = 1; i < rowsCount; i++) {
    for (let j = 1; j <= colsCount; j++) {
      dp[j] = matrix[i][j - 1] + Math.max(dp[j - 1], dp[j]);
    }
  }

  return dp[colsCount];
}


const matrix = [
  [1, 3],
  [5, 20],
  [10, 1],
];

console.log(findBestPath(matrix));
