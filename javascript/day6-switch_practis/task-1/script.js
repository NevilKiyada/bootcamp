function checkday(day) {
    let da=Number(day);
    // console.log(da);
    // console.log(typeof da);
    switch (da) {
        case 1:
            document.getElementById("result").innerHTML = "it's monday";
            break;
        case 2:
            document.getElementById("result").innerHTML = "it's tuesday";
            break;
        case 3:
            document.getElementById("result").innerHTML = "it's wednesday";
            break;
        case 4:
            document.getElementById("result").innerHTML = "it's thursday";
            break;
        case 5:
            document.getElementById("result").innerHTML = "it's friday";
            break;
        case 6:
            document.getElementById("result").innerHTML = "it's saturday";
            break;
        case 7:
            document.getElementById("result").innerHTML = "it's saturday";
            break;
        default:
            document.getElementById("result").innerHTML = "only give one to seven numbers";
            break;
    }
}

function main(){
    let day= document.getElementById("day").value
    checkday(day);
}