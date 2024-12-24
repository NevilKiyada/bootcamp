function next() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((res) => {
            console.log(res)
            document.getElementById("box").innerHTML=nex(res)
        })
}

next()
 function nex(res){
    // return res.map((el)=>{
        return `
            <img src="${res.message}" alt="" width=100% height:100%>
        `
    // })
 }