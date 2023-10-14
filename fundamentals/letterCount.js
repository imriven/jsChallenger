// JS
// challenger

// How many times does a character occur?
// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

function myFunction(a, b) {

let result = 0

 for (letter of b) {
    if (letter == a) {
        result += 1
    }
 }
 return result
}

    // Test Cases:
    console.log(myFunction('m', 'how many times does the character occur in this sentence?'));
    console.log(myFunction('h', 'how many times does the character occur in this sentence?'));
    console.log(myFunction('?', 'how many times does the character occur in this sentence?'));
    console.log(myFunction('z', 'how many times does the character occur in this sentence?'));