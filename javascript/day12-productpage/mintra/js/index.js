
// fetch('http://localhost:3000/products')
//     .then(res => { return res.json() })
//     .then(arr => {
//         console.log(arr.forEach((el) => {
//             console.log(el.price)

//         }))
//         document.getElementById("pro").innerHTML = View(arr)
//     })
//     .catch(err => { console.error(err) })


// function View(el) {
//     console.log(el)
//     return el.map((el) => {
//         return `<a href="singleproduct.html?id=${el.id}">
//                     <div>
//                         <div>
//                             <img src="${el.image}" alt="${el.title}" height="100px" width="130px">
//                             <h3>${el.title}</h3>
//                             <p>${el.description}</p>
//                             <h3>${el.price}</h3>

//                         </div>
//                     </div>
//                 </a>
//                 `
//     }).join("")

// }



fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(products => {
        document.getElementById("pro").innerHTML = renderProducts(products);
    })
    .catch(err => console.error(err));

function renderProducts(products) {
    return products.map(product => `
        <a href="singleproduct.html?id=${product.id}" class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">₹${product.price}</div>
            </div>
        </a>
    `).join("");
}