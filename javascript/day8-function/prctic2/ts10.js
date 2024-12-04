// Question 1:
// Modify the changeText() function to change the text of the button to "Clicked!" when it's clicked,
// instead of changing the heading text.
// Question 2:
// Add a new button to the HTML file with the text "Reset". Implement a JavaScript function named resetText()
//  that resets the text of the heading back to "Welcome!" when this button is clicked.
// Question 3:
// Create a JavaScript function named changeColor() that changes the color of the heading text to red when the button is clicked.
//  HINT:-
//   USE   document.getElementById("heading").style.color = "red";
// Question 5:
// Write a JavaScript function named calculateSquare() that prompts the user to enter a number, 
// calculates the square of that number, and displays the result in an alert box when a button with the text "Calculate Square" is clicked.


function Text(){
    document.getElementById("h").innerHTML = " header clicked"
    document.getElementById("cli").innerHTML = " clicked !!! "
}

function resetText(){
    document.getElementById("h").innerHTML ="Welcome !"
    document.getElementById("h").style.color = "black";
}

function changeColor(){
    document.getElementById("h").style.color = "red";
}

function calculateSquare() {
    let num = Number(document.getElementById("num").value);
    num *=num;
    alert(num)
    document.getElementById("sq").innerHTML = num
}