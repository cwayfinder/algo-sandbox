function findPosition(sortedArr, value) {
  let good = -1;
  let bad = sortedArr.length;

  while (good + 1 < bad) {
    const m = good + Math.floor((bad - good) / 2);
    if (sortedArr[m] <= value) {
      good = m;
    } else {
      bad = m;
    }
  }

  return good + 1;
}

function sort(arr) {
  const sorted = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const position = findPosition(sorted, arr[i]);
    sorted.splice(position, 0, arr[i]);
  }

  return sorted;
}

console.log(sort([4, 2, 5, 8, 1, 5, 0, 4, 7, 2, 8, 6, 9]));
