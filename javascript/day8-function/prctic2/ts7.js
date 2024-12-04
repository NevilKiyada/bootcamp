// Question 8:
// Write a function called isPrime that takes a number as input and returns true if it's a prime number, and false otherwise.
// Test Cases:
// Input: 7
// Expected Output: true
// Input: 10
// Expected Output: false


function isPrime( num){
    let count =0;

    for(let i=2;i< num/2 ; i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==0){
        return true;
    }
    return false;
}

console.log(isPrime(7));