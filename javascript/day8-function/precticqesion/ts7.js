
// Question 7:
// Define a function named multiply that takes two parameters (num1 and num2) and returns the product of the two numbers. Set the default value of num2 to 1.
// Test Case:
// Input: multiply(3, 4)
// Expected Output: 12

function multiply (num1, num2=1) {
    return (num1 * num2)
}

console.log(multiply(3,4));