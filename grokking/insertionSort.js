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

function sort(arr) {
  const sorted = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const pos = search(sorted, arr[i]);
    sorted.splice(pos, 0, arr[i]);
  }

  return sorted;
}

console.log(sort([6, 8, 2, 4, 9, 3, 6, 8, 4, 7]));
