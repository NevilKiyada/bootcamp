(function (){
    let ur = new URLSearchParams(window.location.search);

    let id =ur.get("id");

    fetch(`http://localhost:3000/products/${id}`).then((res)=>res.json()).then((prod)=>{
       document.getElementById("box").innerHTML = View(prod)
    });
    
})()


function View(prod) {
    console.log(typeof(prod));
    // return pro.map((prod) =>{
        return `
                    <div>
                        <div>
                            <img src="${prod.image}" alt="${prod.title}" height="100px" width="130px">
                            <h3>${prod.title}</h3>
                            <p>${prod.description}</p>
                            <h3>${prod.price}</h3>

                        </div>

                        <button id="${prod.id}" oncick(addtocart(${prod.id})) > Cart</button>   
                    </div>



                `
    // }).join("")
    
}


function addtocart(id){
    fetch(`http://localhost:3000/products/${id}`).then((res)=>res.json()).then((prod)=>{
       View(prod)
     });
}