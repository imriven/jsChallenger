// Return the percentage of a number
// Write a function that takes two numbers (a and b) as argument. Return b percent of a

function myFunction(a, b) {
  let percent = (a / 100) * b;
  return percent;
}

// Test Cases:
console.log(myFunction(100, 50));
console.log(myFunction(10, 1));
console.log(myFunction(500, 25));
