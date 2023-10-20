// JS
// challenger

// Remove first n elements of an array
// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

function myFunction(a) {
  return a.splice(3);
}

// Test Cases:
console.log(myFunction([1, 2, 3, 4]));
console.log(myFunction([5, 4, 3, 2, 1, 0]));
console.log(myFunction([99, 1, 1]));
