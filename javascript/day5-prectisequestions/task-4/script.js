function checkNeutral() {
    let num = parseInt(document.getElementById("num").value);

    if (num > 0) {
        document.getElementById("ans").innerHTML = "The number is positive.";
    } else if (num < 0) {
        document.getElementById("ans").innerHTML = "The number is negative.";
    } else if (num === 0) {
        document.getElementById("ans").innerHTML = "The number is neutral (zero).";
    } else {
        document.getElementById("ans").innerHTML = "Invalid input. Please enter a valid number.";
    }
}
