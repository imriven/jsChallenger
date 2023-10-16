// JS
// challenger

// Round a number to 2 decimal places
// Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

function myFunction(a) {
  return Math.round(a * 100) / 100;
}

// Test Cases:
console.log(myFunction(2.12397));
console.log(myFunction(3.136));
console.log(myFunction(1.12397));
console.log(myFunction(26.1379));
