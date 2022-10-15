//Drop non-dominants O(n2) + O(n)
//other way for drop O(n2) - solve is in 06_diff_inp_solve_05.js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for (let k = 0; k < n; k++) {
    console.log(k);
  }
}

logItems(3, 2);
