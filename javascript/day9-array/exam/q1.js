// Write a JavaScript function that adds a new element to an array and then removes the last element. Log the modified array.
// let arr = [12,11,22,17];
// function q1(val){
//     arr.push(val);
//     arr.pop();

// }
// q1(21)
// console.log(arr);

// Write a function that adds a number at the beginning of an array and removes the first element. Return the modified array


// function q2( arq, val){
   

//    arq.shift();
//    arq.unshift(val);
//     return ar;

// }

// let a1 =[];
// a1 = q2(arr,22)

// console.log(a1);




//Use splice to remove the 3rd element from an array of 5 elements. Show the resulting array.

// function q3(){
//     let arr = [12,11,23,45,67];
//     arr.splice(2,0,);
//     console.log(arr);
    
// }
// q3();



// Given an array [1, 2, 3, 4], write a function to create a new array with each element doubled using map.

// let arrq4 = [1,2,3,4];

// let q4 = arrq4.map((element,index) => element *2)
// console.log(q4)




// Write a function that filters out all odd numbers from an array of [1, 2, 3, 4, 5, 6].

// let arrq5 = [1, 2, 3, 4, 5, 6]
// let q5 = arrq5.filter((element , index) => 
// {
//     if (element%2 != 0) {
//         return element
//     }
// }
// )

// console.log(q5)


//Print all the elements of an array using forEach.

// let arrq6 = [12,13,14,15,16,17,18,19,20,21,22];

// arrq6.forEach((element)=> console.log(element));





// Find the position of the number 5 in the array [10, 20, 5, 40].
// function q7(arr){
//     console.log(arr.indexOf(5))
// }
// q7([10, 20, 5, 40]


//  Find the index of the first element greater than 10 in the array [4, 10, 15, 20].
// function q8(arr){
//     console.log(arr.find((e) => e>10))
// }
// q8([4, 10, 15, 20])


// Write a function to check if the word "apple" exists in an array of fruits ['banana', 'orange', 'apple'].
// function q9(arr){
//     if(arr.includes("apple")==true)
//         console.log("exsist");
//     else{
//         console.log("not exist");
//     }
// }
// q9(['banana', 'orange', 'apple'])


// Write a function that checks if all numbers in [2, 4, 6] are even using every, and if at least one number is odd using some.
// function q10(arr){
//     if(arr.every((e) => e%2==0)){
//         console.log("all are even")
//     }
//     if(arr.some((e) => e%2!=0)){
//         console.log("at least one is odd")
//     }
// }
// q10([2, 4, 6])