// 2. Calculator:
// Write a program that acts as a simple calculator using a `switch` statement. The user will input:
// - Two numbers.
// - An operator (+, -, *, /).

// The program should perform the appropriate operation and display the result.
// Example:
// - Input: 5, 3, "+" → Output: 8
// - Input: 9, 3, "/" → Output: 3

function cal(sign){
    sig = sign;
    console.log(typeof sig)
    switch(sig){
        case '+':
            var num1 = Number(document.getElementById('num1').value);
            var num2 = Number(document.getElementById('num2').value);
            document.getElementById('result').innerHTML = (num1+num2);
            break;
        case '-':
            var num1 = Number(document.getElementById('num1').value);
            var num2 = Number(document.getElementById('num2').value);
            document.getElementById('result').innerHTML = (num1-num2);
            break;
        case '*':
            var num1 = Number(document.getElementById('num1').value);
            var num2 = Number(document.getElementById('num2').value);
            document.getElementById('result').innerHTML = (num1*num2);
            break;
        case '/':
            var num1 = Number(document.getElementById('num1').value);
            var num2 = Number(document.getElementById('num2').value);
            document.getElementById('result').innerHTML = (num1/num2);
            break;
        default:
            document.getElementById('result').innerHTML ="enter value only allowed + - * /";
       
    }

}

function main(){
    var sign = document.getElementById('sign').value;
    cal(sign);

}