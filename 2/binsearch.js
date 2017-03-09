function search(a, x) {
  let good = -1;
  let bad = a.length;
  while (good + 1 < bad) {
    let m = good + Math.floor((bad - good) / 2);
    if (a[m] <= x) {
      good = m;
    } else {
      bad = m;
    }
  }
  return good;
}


console.log(search([1,2,2,3,4,5,6,7,8], 2));
