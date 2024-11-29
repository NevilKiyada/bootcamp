let a=String("hello");
let count =0;
let len = a.length;
let i=0;
while(i<len)
{  
    if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'||a[i]=='A'||a[i]=='E'||a[i]=='I'||a[i]=='O'||a[i]=='U')
    {
        count++;
    }
    i++;
}
console.log(count);

