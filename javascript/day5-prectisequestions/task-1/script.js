function maxi(a,b,c){
    if(a>b){
        if(a>c){
            return a;
        }
        else{
            return c;
        }
    }
    else{
        if(b>c){
            return b;
        }
        else{
            return c;
        }
    }
}

function main(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let maxnum = maxi(a,b,c);
    document.getElementById("ans").innerHTML = maxnum;
}