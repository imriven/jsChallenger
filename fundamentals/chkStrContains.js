// JS
// challenger

// Check whether a string contains another string and concatenate
// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation


function myFunction(a, b) {

    if (a.includes(b) === true) {
        return b + a
    } else {
        return a + b
    }

}

// Test Cases:
console.log(myFunction('cheese', 'cake'));
console.log(myFunction('lips', 's'));
console.log(myFunction('Java', 'script'));
console.log(myFunction(' think, therefore I am', 'I'));