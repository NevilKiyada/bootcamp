// 5. Find the sum of all digits of a number using a `for` loop.
//    - Example: Input: `123`, Output: `6`
let a = 123
let b =String(a)
let sum=0;
for(let i = 0; i<b.length; i++){
    // console.log(b[i]);
    sum+= +(b[i])
}

console.log(sum)