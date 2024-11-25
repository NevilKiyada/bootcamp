function lip(){
    let num = document.getElementById("num").value
    if(num%4 == 0){
        document.getElementById("ans").innerHTML = "this is leap year";
    }else{
        document.getElementById("ans").innerHTML = "this is not a leap year";

    }
}

