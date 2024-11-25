function checkGrade() {
    let grade = parseInt(document.getElementById("grade").value);

    if (grade >= 90) {
        document.getElementById("result").innerHTML = "Grade: A";
    } else if (grade >= 80 && grade <= 89) {
        document.getElementById("result").innerHTML = "Grade: B";
    } else if (grade >= 70 && grade <= 79) {
        document.getElementById("result").innerHTML = "Grade: C";
    } else if (grade >= 60 && grade <= 69) {
        document.getElementById("result").innerHTML = "Grade: D";
    } else if (grade < 60) {
        document.getElementById("result").innerHTML = "Grade: F";
    } else {
        document.getElementById("result").innerHTML = "Invalid input. Please enter a valid grade.";
    }
}
