function ladder(n) {
  if (n < 3) {
    return n;
  }

  return ladder(n - 2) + ladder(n - 1);
}

console.log(ladder(0));
console.log(ladder(1));
console.log(ladder(2));
console.log(ladder(3));
console.log(ladder(4));
console.log(ladder(5));
console.log(ladder(6));
console.log(ladder(7));
