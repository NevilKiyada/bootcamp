let a = [10,20,30,40,50,60,"nothing"]

a.push(10)
a.push(30)
a.push()//add value to last
a.pop()//delete from last
a.shift()//delete from first
a.unshift("jk")//add value to first
//learn splice ...
a.splice()// it mostly take 3 arguments ..
a.includes(10)//it cheack if there are values is avialble or not ...
a.indexOf(10)//find index of value in array ...

a.sort()// it considers only first digit for sorting 
a.sort((a,b) => a-b) // it considers all second digit for sorting use for number 
// a-b disides the sorting way  assending or descending

a.sort((a,b) => a.localeCompare(b))// it uses only with characters or strings






console.log(a)