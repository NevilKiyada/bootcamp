// Create a function named findFactorial that takes a positive integer as input and returns its factorial.
// Test Case:
// Input: findFactorial(5)
// Expected Output: 120


function findFactorial(n) {
    let factorial = 1;
    for(let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(findFactorial(6));