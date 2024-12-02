// Question 8:
// Write a function named calculateArea that takes the radius of a circle as a parameter and 
// returns the area of the circle. Use the formula for calculating the area of a circle (area = π * radius^2).
// Test Case:
// Input: calculateArea(2)
// Expected Output: Approximately 12.57


const pi = 3.145;

function calculateArea(radius){
    return (pi * (radius**2))
}

console.log(calculateArea(2))