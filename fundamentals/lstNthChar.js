// //Get last n characters of string
// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

function myFunction(a) {
  const string = a.slice(-3)
  return string
  }
  
  // Test Cases:
  console.log(myFunction("abcdefg"));
  console.log(myFunction("1234"));
  console.log(myFunction("fgedcba"));
  