// Grade Evaluation:
// Write a program that calculates grades using a `switch` statement. Take a student's percentage (0-100) as input and assign a grade:
// - 90-100: A
// - 80-89: B
// - 70-79: C
// - Below 70: Fail




let per = 82

switch (true) {
    case (per >= 90):
        console.log("A")
        break;
    case (per >= 80. && per < 90):
        console.log("B")
        break;
    case(per >= 70 && per < 80):
    console.log("C") 
    default:
        console.log("Fail")
}