// (function () {
//     let ur = new URLSearchParams(window.location.search);

//     let id = ur.get("id");

//     fetch(`http://localhost:3000/products/${id}`).then((res) => res.json()).then((prod) => {
//         document.getElementById("box").innerHTML = View(prod)
//     });

// })()


// function View(prod) {
//     console.log(typeof (prod));
//     // return pro.map((prod) =>{
//     return `
//                     <div>
//                         <div>
//                             <img src="${prod.image}" alt="${prod.title}" height="100px" width="130px">
//                             <h3>${prod.title}</h3>
//                             <p>${prod.description}</p>
//                             <h3>${prod.price}</h3>

//                         </div>

//                         <button id="${prod.id}" onclick=addtocart(${prod.id}) >Add To Cart</button>   
//                     </div>



//                 `
//     // }).join("")

// }


// function addtocart(id) {
//     fetch(`http://localhost:3000/products/${id}`).then((res) => res.json()).then((prod) => {
//         add(prod)
//     });
   

// }

// function add(prod){
//     fetch(`http://localhost:3000/cart/`,{
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({data : prod , quantity: 1}),
//     }).then((res) => res.json())
//     .then((prod) => {
//         console.log(prod);
//     }).catch((err) => console.log(err));
// }

// (function () {
//     let urlParams = new URLSearchParams(window.location.search);
//     let id = urlParams.get("id");

//     fetch(`http://localhost:3000/products/${id}`)
//         .then((res) => res.json())
//         .then((prod) => {
//             document.getElementById("productImage").src = prod.image;
//             document.getElementById("productTitle").textContent = prod.title;
//             document.getElementById("productDescription").textContent = prod.description;
//             document.getElementById("productPrice").textContent = `₹${prod.price}`;
//             document.getElementById("addToCartBtn").setAttribute("onclick", `addtocart(${prod.id})`);
//         });
// })();

// function addtocart(id) {
//     fetch(`http://localhost:3000/products/${id}`)
//         .then((res) => res.json())
//         .then((prod) => {
//             add(prod);
//         })
//         .catch((err) => {console.error(err)});
    
       
    
// }

// function add(prod) {
//     fetch(`http://localhost:3000/cart/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ data: prod, quantity: 1 }),
//     })
//         .then((res) => res.json())
//         .then((prod) => {
//             console.log(prod);
//             // window.location.href = "http://127.0.0.1:5500/javascript/day12-productpage/mintra/html/cart.html";
   
//         })
//         .catch((err) => console.log(err));
// }

// // Add size selection functionality
// document.querySelectorAll('.size-button').forEach(button => {
//     button.addEventListener('click', () => {
//         document.querySelectorAll('.size-button').forEach(btn => {
//             btn.classList.remove('selected');
//         });
//         button.classList.add('selected');
//     });
// });


//  window.location.href("D:\\R&W\\javascript\\day12-productpage\\mintra\\html\\cart.html");



(function () {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id");

    fetch(`http://localhost:3000/products/${id}`)
        .then((res) => res.json())
        .then((prod) => {
            document.getElementById("productImage").src = prod.image;
            document.getElementById("productTitle").textContent = prod.title;
            document.getElementById("productDescription").textContent = prod.description;
            document.getElementById("productPrice").textContent = `₹${prod.price}`;
            document.getElementById("addToCartBtn").setAttribute("onclick", `addtocart(${prod.id})`);
        });
})();

function addtocart(id) {
    fetch(`http://localhost:3000/products/${id}`)
        .then((res) => res.json())
        .then((prod) => {
            checkAndAdd(prod);
        })
        .catch((err) => { console.error(err); });
}

function checkAndAdd(prod) {
    fetch(`http://localhost:3000/cart`)
        .then((res) => res.json())
        .then((cartItems) => {
            let existingItem = cartItems.find(item => item.data.id === prod.id);
            if (existingItem) {
                updateQuantity(existingItem.id, existingItem.quantity + 1);
            } else {
                addNewItem(prod);
            }
        })
        .catch((err) => console.error(err));
}

function updateQuantity(itemId, newQuantity) {
    fetch(`http://localhost:3000/cart/${itemId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity })
    })
        .then((res) => res.json())
        .then((updatedItem) => {
            console.log(updatedItem);
        })
        .catch((err) => console.error(err));
}

function addNewItem(prod) {
    fetch(`http://localhost:3000/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: prod, quantity: 1 })
    })
        .then((res) => res.json())
        .then((newItem) => {
            console.log(newItem);
        })
        .catch((err) => console.error(err));
}


// document.querySelectorAll('.size-button').forEach(button => {
//     button.addEventListener('click', () => {
//         document.querySelectorAll('.size-button').forEach(btn => {
//             btn.classList.remove('selected');
//         });
//         button.classList.add('selected');
//     });
// });
