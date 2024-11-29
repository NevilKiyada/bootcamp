let a = 0;
let b=1;
console.log(a,b);
let z=0;
while(z<50)
{
    z=a+b;
    // console.log(a);
    // console.log(b);

    console.log(z);
    a=b;
    b=z;
}