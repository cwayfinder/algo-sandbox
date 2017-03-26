function toys(n) {
  const a = [];

  for (let i = 0; i < a.length; i++) {
    a[i] = 0;
  }

  function f(i) {
    if (i < 0) console.log(a);
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

toys(0);
toys(1);
toys(2);
toys(3);
