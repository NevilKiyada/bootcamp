const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 30 }
    ];

console.log(    people.filter((e) => {
        if(e.age <18){
            return e
        }
    }))