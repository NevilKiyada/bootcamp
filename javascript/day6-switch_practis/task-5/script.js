function checkday(mon) {
    let mo=Number(mon);
    // console.log(da);
    // console.log(typeof da);
    switch (mo) {
        case 1:
            document.getElementById("result").innerHTML = "it's january";
            break;
        case 2:
            document.getElementById("result").innerHTML = "it's february";
            break;
        case 3:
            document.getElementById("result").innerHTML = "it's march";
            break;
        case 4:
            document.getElementById("result").innerHTML = "it's april";
            break;
        case 5:
            document.getElementById("result").innerHTML = "it's may";
            break;
        case 6:
            document.getElementById("result").innerHTML = "it's jun";
            break;
        case 7:
            document.getElementById("result").innerHTML = "it's julay";
            break;
        case 8:
            document.getElementById("result").innerHTML = "it's ogest";
            break;
        case 9:
            document.getElementById("result").innerHTML = "it's september";
            break;
        case 10:
            document.getElementById("result").innerHTML = "it's octomer";
            break;
        case 11:
            document.getElementById("result").innerHTML = "it's november";
            break;
        case 12:
            document.getElementById("result").innerHTML = "it's december";
            break;
        default:
            document.getElementById("result").innerHTML = "only give one to twelve numbers";
            break;
    }
}

function main(){
    let day= document.getElementById("month").value
    checkday(day);
}