function countCost(matrix, housesCount, colorsCount) {
  // console.log(matrix)

  function minCost(house, lastColor) {
    if (house === housesCount) {
      return 0
    }

    let result = Number.POSITIVE_INFINITY;

    for (let color = 0; color < colorsCount; color++) {
      if (lastColor !== color) {
        result = Math.min(result, matrix[house][color] + minCost(house + 1, color));
      }
    }

    // if (lastColor !== 0) {
    //   result = Math.min(result, matrix[house][0] + minCost(house + 1, 0));
    // }
    // if (lastColor !== 1) {
    //   result = Math.min(result, matrix[house][1] + minCost(house + 1, 1));
    // }
    // if (lastColor !== 2) {
    //   result = Math.min(result, matrix[house][2] + minCost(house + 1, 2));
    // }

    // console.log('\t\t', result)

    return result;
  }

  return minCost(0, colorsCount);
}

// console.log(countCost([
//   '30 19'.split(' '),
//   '64 77'.split(' '),
//   '15 19'.split(' '),
//   '4 71'.split(' '),
//   '90 86'.split(' '),
//   '93 32'.split(' '),
// ], 6));

console.log(countCost([
  '30 19 5'.split(' ').map(Number),
  '64 77 64'.split(' ').map(Number),
  '15 19 97'.split(' ').map(Number),
  '4 71 57'.split(' ').map(Number),
  '90 86 84'.split(' ').map(Number),
  '93 32 91'.split(' ').map(Number),
], 6, 3));
