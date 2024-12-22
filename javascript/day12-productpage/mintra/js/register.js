console.log("hello ")
document.getElementById("register").addEventListener("submit", (a) => {
    a.preventDefault();


    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value


    let obj={
        username: username,
        email: email,
        password: password
    }
    uploaddata(obj);
});


function uploaddata(obj){
    fetch("http://localhost:3000/users",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body : JSON.stringify(obj)
    })
    .then((a)=>{
        return a.json()
    }) 
    .then((data)=>{
        alert("register user successfully")
    })
    .catch((err)=>{
        console.log(err)
    })

}