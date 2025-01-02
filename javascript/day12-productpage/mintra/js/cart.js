let totalprice = 0;

(function () {
    fetch("http://localhost:3000/cart").then((ras) => ras.json()).then((Ras) => {
        console.log(Ras);
        document.getElementById("pro").innerHTML = view(Ras)
        price(Ras)

    }).catch((err) => console.error(err));
})()


function price(ras){
    ras.map((pr)=>{
        totalprice += pr.data.price * pr.quantity;
        console.log(totalprice)
    })
    document.getElementById("tot").innerText = totalprice.toFixed(2);
}


function view(ras) {

    return ras.map(product => `
        
            <div class="product-image">
                <img src="${product.data.image}" alt="${product.data.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.data.title}</h3>
                <p class="product-description">${product.data.description}</p>
                <div class="product-price">₹${product.data.price}</div>
                <div>
                    <button onclick="plus('${product.id}', ${product.quantity})"> + </button>
                    <input disabled type="text" id="count" value=${product.quantity}>
                    <button onclick="minus('${product.id}', ${product.quantity})"> - </button> 
                </div>
            </div>
         
    `).join("");
}



function plus(id, qn) {
    let a = qn + 1;
    fetch(`http://localhost:3000/cart/${id}`,{
        method : "PATCH",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({quantity : a})
    })
    .then((Ras) => Ras.json())
    .then((ras) =>{
        console.log(ras);
    })
    .catch((err) => {
        console.error(err);
    });
}


function minus(id, qna) {
    let qn = qna
  
    
    if (qn == 1) {
        fetch(`http://localhost:3000/cart/${id}`, {
            method: "DELETE",

        }).then((response) => { response.json() })
            .then((rs) => { console.log(rs) })
            .catch((err) => { console.error(err) });

    }
    else{
        let a = qn - 1;
        fetch(`http://localhost:3000/cart/${id}`,{
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({quantity : a})
        })
        .then((Ras) => Ras.json())
        .then((ras) =>{
            console.log(ras);
        })
        .catch((err) => {
            console.error(err);
        });


    }
}