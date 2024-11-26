// 3. Traffic Light:
// Write a program that takes a color of a traffic light as input (red, yellow, green) and uses a `switch` statement to print the corresponding action:
// - Red → Stop
// - Yellow → Get Ready
// - Green → Go

function main()
{
    let cl=document.getElementById("ac").value;
    console.log(cl);

    switch (cl)
    {
        case "red":
            document.getElementById("result").innerHTML="Stop the vehicle";
            break;
        case "yellow":
            document.getElementById("result").innerHTML="get ready to start the vehicle";
            break;
        case "green":
            document.getElementById("result").innerHTML="get to Go !!!";
            break;
        default:
            document.getElementById("it's not the traffic light color");
            break;
    }
}