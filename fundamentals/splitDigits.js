// JS
// challenger

// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting

function myFunction(a) {
  return String(a).split("").map(Number);
}

// Test Cases:
console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));
