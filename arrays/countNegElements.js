// JS
// challenger

// Count number of negative values in array

//Write a function that takes an array of numbers as argument. Return the number of negative values in the array.


function myFunction(a) {
    return a.filter(num => num < 0).length
}

// Test Cases:
console.log(myFunction([1,-2,2,-4]));
console.log(myFunction([0,9,1]));
console.log(myFunction([4,-3,2,1,0]));



// function myFunction(a) {
//   counter = 0;
//   for (num of a) {
//     if (num < 0){
//       counter += 1
//     }
//   }
//   return counter
// }


// function myFunction(a) {
//   const results = a.filter(num => num < 0)
//   return results.length
// }
