function checkPosibility(s, t, k) {
  if (k >= s.length + t.length) return true;

  // find length of common start (by finding the first different character occurrence)
  const cLength = s.split('').findIndex((char, index) => char !== t[index]);

  // calculate sum of different tails
  const diff = (s.length - cLength) + (t.length - cLength);

  return (diff - k) % 2 === 0;
}

checkPosibility('hackerhappy', 'hackerrank', 9);
