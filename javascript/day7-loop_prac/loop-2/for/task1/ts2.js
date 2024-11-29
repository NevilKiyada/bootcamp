// Find the sum of all numbers divisible by 3 between 1 and 30.

let sum = 0;

for(var i = 0; i <30 ; i++) 
{
    if(i % 3 == 0)
    {
        sum+=i;
    }
}
console.log(sum);