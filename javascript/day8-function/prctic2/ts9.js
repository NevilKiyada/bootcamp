// Question 10:
// Define a function called countDigits that takes a positive integer as input and returns the number of digits it has.
// Test Case:
// Input: 12345
// Expected Output: 5

function countDigits(num){
    num = String(num);
    let digits = 0  
    for(let i=0; i<num.length; i++){
        digits += 1;
    }

    return digits;
}

num = 12345

console.log(countDigits(num));