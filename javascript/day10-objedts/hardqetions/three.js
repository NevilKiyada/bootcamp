
// Find Second Largest Number
// Task: Use reduce to find the second-largest number in an array.
// - Input: `[10, 20, 15]`
// - Output: `15`



const input = [10, 20, 15,14,67,23,76,10.2];

input.sort((a, b) => b-a);

console.log(input[1]);

