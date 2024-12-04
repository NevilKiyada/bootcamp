// Question 6:
// Create a function named reverseString that takes a string as input and returns the reversed string.
// Test Case:
// Input: "hello"
// Expected Output: "olleh"


function reverseString(str){

    let st=String("");
    console.log(st);
    for(let i=str.length-1; i>=0; i--){
        st += str[i];
        // console.log(str[i]);
    }
    // console.log(typeof(st));
    return st;

}
let a=reverseString("hello");
console.log(a);