// Question 7:
// Write a function named printMultiplicationTable that takes a number as input and prints its multiplication table from 1 to 10.
// Test Case:
// Input: printMultiplicationTable(3)
// Expected Output:
// 1 * 3 = 3
// 2 * 3 = 6
// 3 * 3 = 9
// 4 * 3 = 12
// 5 * 3 = 15
// 6 * 3 = 18
// 7 * 3 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

function printMultiplicationTable(num) { 
    for(let i=1 ; i<= 10 ; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }

}

printMultiplicationTable(3); 