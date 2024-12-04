// Question 3:
// Create a function named isEven that takes an integer as input and returns true if it's even, and false otherwise.
// Test Cases:
// Input: 7
// Expected Output: false
// Input: 10


function isEven(number) {
    if(number%2 == 0) {
        return true;
    }
    return false;
}

console.log(isEven(3))