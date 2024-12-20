let arr = JSON.parse(localStorage.getItem("user")) || [];


document.getElementById("rag").addEventListener("submit",(a)=>{
    a.preventDefault()
   
    let ab={
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password:  document.getElementById("password").value,
    }
    
    arr.push(ab)
    localStorage.setItem("user",JSON.stringify(a))
    
})