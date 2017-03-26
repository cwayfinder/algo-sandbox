// iterate through 0 ... 2^n decimal numbers and convert them into binary
function sequences(n) {
  const end = Math.pow(2, n);
  for (let i = 0; i < end; i++) {
    console.log(i.toString(2));
  }
  console.log()
}

// recursive approach
function sequences(n) {
  const a = [];

  function f(i) {
    if (i < 0) console.log(a);
    else {
      a[i] = 0;
      f(i -1);

      a[i] = 1;
      f(i - 1);
    }
  }

  f(n);

  console.log()
}

// recursive approach with optimisation
function sequences(n) {
  const a = [];

  function f(i) {
    if (i < 1) {
      a[i] = 0;
      console.log(a);

      a[i] = 1;
      console.log(a);
    }
    else {
      a[i] = 0;
      f(i - 1);

      a[i] = 1;
      f(i - 1);
    }
  }

  f(n);

  console.log()
}


sequences(0);
sequences(1);
sequences(2);
sequences(3);
