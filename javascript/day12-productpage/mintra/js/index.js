
fetch('https://fakestoreapi.com/products')
    .then(res => { return res.json() })
    .then(arr => {
        console.log(arr.forEach((el) => {
            console.log(el.price)
            View(el)
        }))
    })
    .catch(err => { console.error(err) })


function View(el) {
   
    document.getElementById("pro").innerHTML += `<div>
             <div>
                <img src="${el.image}" alt="${el.title}" height="100px" width="130px">
                <h3>${el.title}</h3>
                 <p>${el.description}</p>
                 <h3>${el.price}</h3>

             </div>
         </div>
        `
}