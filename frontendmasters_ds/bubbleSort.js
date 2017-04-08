function swap(arr, first, second) {
  const tmp = arr[first];
  arr[first] = arr[second];
  arr[second] = tmp;
}

function sort(arr) {
  let count = 0;
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      count++;
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  console.log(count);

  return arr;
}

console.log(sort([4, 2, 5, 8, 1, 5, 0, 4, 7, 2, 8, 6, 9]));
