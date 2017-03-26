function processData(input) {
  const [t, ...cases] = input.split('\n');

  cases.forEach(item => {
    const [n, m, s] = item.split(/\s/).map(Number);
    console.log((m % n + s - 1) % n);
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});


console.log(Math.pow(10, 9))
