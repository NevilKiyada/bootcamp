// 1. Combining `map` and `filter`:
// Write a function that takes an array of numbers and returns a new array
// of squares of even numbers using `filter` and `map`.
// Input:
// const numbers = [1, 2, 3, 4, 5, 6];
// Output:
// [4, 16, 36]
let array = [1, 2, 3, 4, 5, 6];
// function  q1(arr) {
//     let a1 = arr.filter((ele,ind) => {
//         if(ele%2 == 0){
//             return ele;
//         }
//     });
    
//     return a1.map((e) => e*e);
// }
// let a = q1(array)
// console.log(a)

// function q1(array) {
//     return array.filter((e) => e%2 == 0 ).map((e) => e*e)

// }


// let a = q1(array)
// console.log(a)

//2.
// Using `forEach` to Count Occurrences:
// Write a function that counts how many times each element appears in an
// array using `forEach`.
// Input:
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Output:
// {
// apple: 3,
// banana: 2,
// orange: 1
// }


// function q2(arr){
//     let arr2 = []
//     arr.forEach((e) => {
//         let count=0;
//         if(arr2.includes(e)){

//         }else{
//             arr2.push(e)
//             for(let i=0 ; i<arr.length ; i++){
//                 if(arr[i]==e)
//                     count ++;
//             }
//             console.log(e +" is "+ count +" times")
//         }
//     })
// }
// q2(items)





// 3. Chain `map`, `filter`, and `forEach`:
// Write a function that filters out numbers less than `5` from an array,
// doubles the remaining numbers, and logs each doubled value using
// `forEach`.
// Input:
const numbers = [2, 3, 5, 7, 8];
// Output:
// 10
// 14
// 16

function q3(numbers) {
     numbers.filter((e)=> e>=5).map((e)=> e*2).forEach(element => console.log(element))
        
     };

q3(numbers)