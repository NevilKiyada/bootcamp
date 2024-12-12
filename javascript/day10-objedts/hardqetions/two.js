// Filter and Transform Objects
// Task: Filter out objects where price > 100, and then add a 10% discount to the remaining objects using map.
// - Input:

// const products = [{ price: 50 }, { price: 120 }, { price: 80 }];

// - Output: `[{ price: 45 }, { price: 72 }]


const products = [{ price: 50 }, { price: 120 }, { price: 80} ];


console.log(products.filter((e)=>{
    if(e.price < 100){
        e.price -= e.price * 0.1;
        return e.price
    }
}))