// Let us understand it with a simple example. Write a function that accepts two arrays and returns true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.
// frequency_function([1,2,3], [4,1,9]) //returns true
// frequency_function([1,2,3], [1,9]) //returns false

function frequency_function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(frequency_function([1, 2, 3], [4, 1, 9])); //returns true
console.log(frequency_function([1, 2, 3], [1, 9])); //returns false
