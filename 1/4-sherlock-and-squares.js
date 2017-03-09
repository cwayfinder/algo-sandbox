function countSquares(start, end) {
  let sqrt = Math.ceil(Math.sqrt(start));

  let count = 0;
  while(sqrt * sqrt <= end) {
    count++;
    sqrt++;
  }

  return count;
}

function processData(input) {
  const [t, ...cases] = input.split('\n');

  cases
    .map(str => str.split(' ').map(Number))  // convert line from string to array of numbers
    .map(line => countSquares(...line))      // convert case input into case result - number of squares
    .forEach(result => console.log(result))  // print results
}
