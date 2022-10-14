//Solve 05_diff_inp_drop.js
// O(a * b)

function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(i, j);
      console.log(a, b);
    }
  }
}

logItems(3, 4);
// Result 12 times 3 4
// 3 4
// 3 4
// 3 4
// 3 4
// 3 4
// 3 4
// 3 4
// 3 4
// 3 4
// 3 4
// 3 4
// 3 4
