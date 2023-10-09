// Remove last n characters of string
// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

function myFunction(a) {
  const string = a.slice(0, -3);
  return string;
}

// Test Cases:
console.log(myFunction("abcdefg"));
console.log(myFunction("1234"));
console.log(myFunction("fgedcba"));
