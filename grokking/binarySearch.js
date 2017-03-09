function search(arr, entry) {
  let start = -1;
  let end = arr.length;

  while(start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] >= entry) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return end;
}

console.log(search([2, 3, 5, 7, 8, 9], 6));
