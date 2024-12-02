// Question 9:
// Define two functions, double and square, where double doubles a number and square squares a number. Create a function named doubleSquare that takes a number as input, doubles it using the double function, and then squares the result using the square function.
// Test Case:
// Input: doubleSquare(3)
// Expected Output: 36

function doubleSquare(num){
    let db =double(num)
    console.log(square(db))
}

function square(num){
    return num*num
}
function double(num){
    return (num+num)
}

doubleSquare(3)