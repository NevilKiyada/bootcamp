document.getElementById("loginForm").addEventListener("submit",(a)=>{
    a.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let pas = document.getElementById("loginPassword").value;

    if (valid(email,pas)){
        alert("login successful")
    }
    else{
        alert("failed to login");
    }

})


function valid(email,password) {
    fetch(`http://localhost:3000/users?email=${email}`)
    .then((res)=>{
        return res.json()
    })
    .then((Res)=>{
        console.log(Res)
        if(Res[0].password == password){
            alert("login successful")
             window.location.href = "../HTML/index.html"

            // return true
        }
        else{
           
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}
