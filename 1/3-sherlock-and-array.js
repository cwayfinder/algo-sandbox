function checkArray(arr) {
  let leftSum = arr[0];
  let rightSum = arr.slice(2).reduce((acc, number) => acc + number, 0);

  for(let i = 1; i < arr.length; i++) {
    if (leftSum === rightSum) {
      return true;
    } else {
      leftSum += arr[i];
      rightSum -= arr[i + 1];
    }
  }

  return false;
}

function processData(input) {
  const [t, ...cases] = input.split('\n');

  cases
    .filter((item, index) => index % 2 === 0) // throw lines with arrays lengths away
    .map(str => str.split(' ').map(Number))   // convert line from string to array of numbers
    .map(checkArray)                          // convert case input into case result (true or false)
    .forEach(item => console.log(item ? 'YES' : 'NO'))
}
