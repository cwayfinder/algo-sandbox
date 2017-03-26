function ladder(arr) {
  const n = arr.length;

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return arr[n - 1];
  }

  const option1 = ladder(arr.slice(0, n - 2));
  const option2 = ladder(arr.slice(0, n - 1));
  return arr[n - 1] + Math.min(option1, option2);
}

console.log(ladder([]));  // 0
console.log(ladder([2])); // 2
console.log(ladder([2, 3]));    // 3
console.log(ladder([2, 3, 5]));   // 7
