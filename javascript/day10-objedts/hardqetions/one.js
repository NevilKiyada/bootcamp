//  Input: `['a', 'b', 'a']`
// - Output: `{ a: 2, b: 1 }`

const input = ['a', 'b', 'a','a','c','a','d','h','k ', 'l'];


let output = {};

input.forEach((a)=> {
    if(Object.hasOwn(output, a)){
        output[a] += 1;

    }
    else {
        output[a] = 1;
    }
})

console.log(output);