document.getElementById("loginForm").addEventListener("submit", (a) => {
    a.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let pas = document.getElementById("loginPassword").value;
    let val = valid(email, pas)
    if (val) {
        alert("login successful")
    }
    

})


function valid(email, password) {
    fetch(`http://localhost:3000/users?email=${email}`)
        .then((res) => {
            return res.json()
        })
        .then((Res) => {
            console.log(Res)
            if (Res.length == 0) {
                alert("email is not valid")
                return false
            }
            else {
                if (Res[0].password == password) {
                    window.location.href = "http://127.0.0.1:5500/javascript/day12-productpage/mintra/html/index.html"
                    alert("login successful")
                    return true


                }
                else {
                    alert("password is not valid");
                    return false
                }
            }
        })
        .catch((err) => {
            console.log(err)
        })
}
