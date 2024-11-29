let a = "abcdcba"
let st =0 ;
let end = a.length-1;
let flag = false ;
while(st<end) {
    if(a[st] == a[end]) {
        flag = true ;
    }
    else{
        flag = false ;
    }
    st++;
    end-- ;
}

if(flag) {
    console.log("Palindrome")
}
else{
    console.log(" not Palindrome")
}