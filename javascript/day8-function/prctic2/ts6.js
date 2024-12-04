// Question 7:
// Define a function called calculateFactorial that takes a positive integer as input and returns its factorial.
// Test Case:
// Input: 5
// Expected Output: 120


function calculateFactorial(num){
    fact = 1;
    for ( let i = num ; i>0 ; i--){
        fact *= i
    }
    return fact;
}


console.log(calculateFactorial(5)); 