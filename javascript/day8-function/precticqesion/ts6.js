// Question 6:
// Create a function named printNumbers that takes a limit parameter and prints all numbers from 1 to the limit using a loop.
// Test Case:
// Input: printNumbers(5)
// Expected Output:     1
// 2
// 3
// 4
// 5



function printNumbers(num) {
    for (var i = 1; i <= num; i++) {
        console.log(i);
    }
}
let num = 12;
printNumbers(num);