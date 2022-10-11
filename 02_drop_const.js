// Drop consts - mistake - code run just n + n => O(2n), corect is n * n => 0(n2)=> next example
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log("i" + i);
  }
  for (let j = 0; j < n; j++) {
    console.log("j" + j);
  }
}
logItems(10);
