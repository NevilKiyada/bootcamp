// Question 9:
// Write a function called isPositive that takes a number as input and returns true if it's positive, and false otherwise.
// Test Cases:
// Input: 10
// Expected Output: true
// Input: -3
// Expected Output: false


function isPositive(num){
    if(num<0) return false
    return true
}

console.log(isPositive(-3))