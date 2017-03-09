function greatestSquare(a, b) {
  if (a === b * 2) return b;  //base case

  return greatestSquare(b, a % b);  // recursive case
}

console.log(greatestSquare(1680, 640));
