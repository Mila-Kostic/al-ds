// example for theory 01_big_O.js - decreased way

// program to display the sum of n natural numbers
let sum2 = 0;
const n = 100;

//looping from i = n to 1
// in each iteration, i is decreased by 1
for (let i = n; i >= 1; i--) {
  // adding i to sum in each iteration
  sum2 += i; // sum = sum + i
}

console.log("Sum: ", sum2);
