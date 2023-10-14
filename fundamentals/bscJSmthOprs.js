
// JS
// challenger

// Basic JavaScript math operators
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. S  um a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.

function myFunction(a, b, c, d, e, f) {
 
    let result = a + b;
    result -= c;
    result *= d
    result /= e;
    result **= f;

return result;

}

    // Test Cases:
    console.log(myFunction(6,5,4,3,2,1));
    console.log(myFunction(6,2,1,4,2,3));
    console.log(myFunction(2,3,6,4,2,3));