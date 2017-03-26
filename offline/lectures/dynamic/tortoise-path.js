function logTable(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  console.log();
}

let generateMatrix = function (n, m) {
  const a = [];

  // fill matrix by zeros
  for (let i = 0; i < n; i++) {
    a[i] = [];
    for (let j = 0; j < m; j++) {
      a[i][j] = 0;
    }
  }

  // fill first row and first column by ones
  for (let i = 0; i < m; i++) {
    a[0][i] = 1;
  }
  for (let i = 0; i < n; i++) {
    a[i][0] = 1;
  }

  return a;
};

function countPossiblePaths(n, m) {
  const a = generateMatrix(n, m);

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      a[i][j] = a[i][j - 1] + a[i - 1][j];
    }
  }

  // logTable(a);
  return a[n - 1][m - 1];
}


console.log(countPossiblePaths(1, 3));
console.log(countPossiblePaths(2, 2));
console.log(countPossiblePaths(2, 3));
console.log(countPossiblePaths(3, 3));
console.log(countPossiblePaths(4, 4));
console.log(countPossiblePaths(5, 5));
