// JS
// challenger

// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

function myFunction(a) {

 let result = Number.isInteger(a)

 return result
}

    // Test Cases:
    console.log(myFunction(4));
    console.log(myFunction(1.123));
    console.log(myFunction(1048));
    console.log(myFunction(10.48));