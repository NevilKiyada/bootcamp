// Find the product of all numbers from 1 to 5.
//    - Example: Output: `1 * 2 * 3 * 4 * 5 = 120`

let num=5;
let mul=1;

for(var i = 1; i <=num; i++) 
{
    mul*=i;
}
console.log(mul);