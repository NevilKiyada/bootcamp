(function () {
    fetch("http://localhost:3000/cart").then((ras) => ras.json()).then((Ras) => {
        console.log(Ras);
        document.getElementById("pro").innerHTML = view(Ras)
    }).catch((err) => console.error(err));
})()



function view(ras) {
    return ras.map(product => `
        <a href="singleproduct.html?id=${product.data.id}" class="product-card">
            <div class="product-image">
                <img src="${product.data.image}" alt="${product.data.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.data.title}</h3>
                <p class="product-description">${product.data.description}</p>
                <div class="product-price">₹${product.data.price}</div>
                <div>
                    <button onclick="plus()"> + </button>
                    <input disabled type="text" id="count" value=${product.quantity}>
                    <button onclick="mins(${product.id, product.quantity})"> - </button>
                </div>
            </div>
        </a>
    `).join("");
}



function plus() {
    fetch("http://localhost:3000/cart",)
}


function minus(id, qn) {
    if (qn == 1) {
        fetch(`http://localhost:3000/cart/${id}`, {
            method: "DELETE",

        }).then((response) => { response.json() })
            .then((rs) => { console.log(rs) })
            .catch((err) => { console.error(err) });

    }
    else{
        let a = qn
    }
}