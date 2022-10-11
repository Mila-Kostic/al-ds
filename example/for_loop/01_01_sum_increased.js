// example for theory 01_big_O.js - increased way

//Program to display the sum of natural numbers
let sum = 0;
const n = 100;

//looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
  sum += i; //sum = sum + i
}

console.log("Sum: ", sum);
