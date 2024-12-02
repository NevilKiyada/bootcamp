// Question 5:
// Define a function named isEven that takes a single parameter (num) and returns true if the number is even and false otherwise.
// Test Case:
// Input: isEven(6)
// Expected Output: true


function isEven(num) {
    if(num%2==0) return true;
    else return false;
}

console.log(isEven(5));