// Get nth character of string
// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

function myFunction(a, n) {
  const array = [];
  for (letter in a) {
    array.push(letter);
  }
  console.log(array);
  return array.at(n);
}

// Test Cases:
console.log(myFunction("abcd", 1));
console.log(myFunction("zyxbwpl", 5));
console.log(myFunction("gfedcba", 3));
