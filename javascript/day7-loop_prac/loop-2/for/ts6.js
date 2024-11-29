// 6. Print all prime numbers between 1 and 50

for (var i = 2; i <=50 ;i++) 
{
    let count = 0;
    for(var j = 1; j <=i ; j++) 
    {
            if(i%j == 0)
            {
                count++;
            }     
    }
    if(count <=2)
        console.log(i);
}