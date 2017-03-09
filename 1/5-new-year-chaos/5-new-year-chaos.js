function processData(input) {
  const [t, ...cases] = input.split('\n');

  cases
    .filter((item, index) => index % 2 === 1) // throw lines with arrays lengths away
    .map(str => str.split(' ').map(Number))   // convert line from string to array of numbers
    .map(countBribes)                         // convert case input into case result (number of bribes)
    .forEach(item => console.log(item))
}

function countBribes(arr, length) {
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    const initialPosition = arr[i];
    const currentPosition = i + 1;

    if (initialPosition - currentPosition > 2) return 'Too chaotic';  // cheater detected!

    for (let j = Math.max(0, initialPosition - 2); j < i; j++) {
      if (arr[j] > initialPosition) count++;
    }
  }

  return count;
}

function main() {
  const t = parseInt(readLine());
  for (let a0 = 0; a0 < t; a0++) {
    const n = parseInt(readLine());
    q = readLine().split(' ').map(Number);

    console.log(countBribes(q, n));
  }
}


const fs = require('fs');
fs.readFile('input06.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  processData(data);
});
