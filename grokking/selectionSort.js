function findSmallest(arr) {
  return arr.reduce((minIndex, val, index) => val < arr[minIndex] ? index : minIndex, 0);
}

function sort(arr) {
  const sorted = [];
  const copy = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    const smallestIndex = findSmallest(copy);
    sorted.push(copy[smallestIndex]);
    copy.splice(smallestIndex, 1);
  }

  return sorted;
}

console.log(sort([6, 8, 2, 4, 9, 3, 6, 8, 4, 7]));
