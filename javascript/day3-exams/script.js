// 1. Intro to JavaScript:
// a. What is JavaScript? Mention any two features.
// 	JavaScript is lightweight interpreted programming language used to create interactive webpages , it is simpley use with html or css .
// features 
// -> supported events so you can use events like mouse click or button click ,
// ->JavaScript is lightweight so it run on browser 


// b. Differentiate between ES5 and ES6 concepts with examples.

// ->for declare a variable in es5 we are use var keyword in es6 we can use let or const keyword for declare an variable
// -> no defult values are available in es5 , default function and parameters are introduced.


//  2. Variables and Data Types:

// a. What are variables? How are they declared in JavaScript?
//  definition -
// 	variable is one kind of container which hold some different type of values like number, string , Boolean 
// declaration 
// 	you can declare a variable using three keyword let var or const
// 	ex:- let a = 10 , var b =" hii " , const pi = 3.145

// b. Name and explain the different data types available in JavaScript.
// 	type of data types  
// 		-number 
// 		-string 
// 		-Boolean
// 		-null
// 		-undefine
// 	-number 
// 		number data type can store int float or numeric values 
// 		let num = 20
// 	-string
// 		string is store array of char or text , your can use single cought or double cought "" , '' for declare an string 
// 		let str = "hellow world "
// 	-Boolean
// 		Boolean data type store either true or flase
// 		let bol = true
// 	-null
// 		this type store an null to the location that means it can not contain anything but you must be insilized a null to the 			variable otherwise JavaScript convert in to undefine
// 		let nl = null
// 	-undefine
// 		when you don't initialize any value to the variable than java script automatic define it is a undefine
// 		let udn 

// 3. Operators in JavaScript:

// a. Explain the difference between == and === operators. Provide examples.
// The difference between == and === operators in JavaScript lies in how they compare values:

// 1. == (Equality Operator): 
// This compares two values for equality but does not consider their data types. It performs type coercion, meaning it converts the values to the same type before comparing them.
// Example: If x is 5 (number) and y is "5" (string), the expression (x == y) will return true because the string "5" is converted to the number 5.

// 2. === (Strict Equality Operator):
// This compares two values for equality and also considers their data types. It does not perform type coercion.
// Example: If x is 5 (number) and y is "5" (string), the expression (x === y) will return false because the data types are different (number vs string).


// b. Logical operators in JavaScript are used to combine or invert boolean values.  

// 1. Logical AND (&&): Combines two conditions and returns true only if both conditions are true.
// Example: If x is 5 and y is 10, the expression (x > 3 && y < 15) will return true.

// 2. Logical OR (||): Combines two conditions and returns true if at least one condition is true.
// Example: If x is 5 and y is 10, the expression (x > 10 || y < 15) will return true.

// 3. Logical NOT (!): Inverts a boolean value. If the value is true, it returns false; if the value is false, it returns true.
// Example: If isAvailable is true, the expression (!isAvailable) will return false.

//-------------------------------------------------------------------------------------------------------------------------------

//1. Write a program to swap two numbers without using a third variable.
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;
console.log(`After swapping: a = ${a}, b = ${b}`);

//2. A student scored 75 marks in an exam. Write a program to determine the grade based on the
// following conditions:
// . 90 and above: A
// · 80-89: B
// · 70-79: C
// . Below 70: D


let marks = 75;
let grade;
if (marks >= 90) {
    grade = "A";
} else if (marks >= 80) {
    grade = "B";
} else if (marks >= 70) {
    grade = "C";
} else {
    grade = "D";
}
console.log(`Marks: ${marks}, Grade: ${grade}`);


//3. Write a program to calculate a restaurant bill, considering:
// . The cost of the meal, tax (5%), and tip (10%).
// · Input the cost of the meal and output the total amount to be paid.


let mealCost = 500; 
let tax = mealCost * 0.05;
let tip = mealCost * 0.10;
let totalAmount = mealCost + tax + tip;
console.log(`Tax: ${tax}, Tip: ${tip}, Total Amount: ${totalAmount}`);

//4. Write a program to calculate the simple interest based on the formula:
let principal = 1000; 
let rate = 5; 
let time = 2; 
let simpleInterest = (principal * rate * time) / 100;
console.log(` Simple Interest: ${simpleInterest}`);


//--------------------------------------------------------------------------------------------------------------------


// 5. An employee earns a basic salary of ₹20,000. Write a program to calculate:
// HRA = 20% of basic salary
// . DA = 10% of basic salary
// . Total Salary = Basic Salary + HRA + DA

let basicSalary = 20000; 
let hra = basicSalary * 0.20; 
let da = basicSalary * 0.10;
let totalSalary = basicSalary + hra + da;
console.log(`Basic Salary: ₹${basicSalary}, HRA: ₹${hra}, DA: ₹${da}, Total Salary: ₹${totalSalary}`);


//6. Write a program to determine whether a given number is even or odd.
let numb = 16;
console.log(`the number ${a} is even  = `+ ((a & 1) === 0)); 