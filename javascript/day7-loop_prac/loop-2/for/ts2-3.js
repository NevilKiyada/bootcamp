// Create a program that sums all the digits of a number.
//    - Example: Input: `12345`, Output: `15`

let a = 12345
let b =String(12345)
let sum=0;
for(let i = 0; i<b.length; i++){
    // console.log(b[i]);
    sum+= +(b[i])
}

console.log(sum)