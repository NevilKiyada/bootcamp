// Question 5:
// Write a function called findMax that takes two numbers as input and returns the maximum of the two.
// Test Cases:
// Input: 10, 7
// Expected Output: 10
// Input: 3, 9
// Expected Output: 9


function findMax(num1 , num2) {
    if(num1 > num2){
        return num1;
    }
    return num2;
}

num1 = 45;
num2 = 12;

console.log(findMax(num1 , num2));