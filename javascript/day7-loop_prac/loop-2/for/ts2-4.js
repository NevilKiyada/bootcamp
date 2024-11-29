// 4. Create a program to check whether a number is a perfect square.
//    - Example: Input: `16`, Output: `Perfect square

let flag = false;
let target = 16;
for (let i = 0; i < (target/2); i++) {
    if(i*i == target) {
        flag = true;
    }
}

if (flag) {
    console.log("Perfect square");
}
else {
    console.log("not a Perfect square");
}
