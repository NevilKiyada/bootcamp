let values = "";  // Tracks the current number being entered
let ans = "";     // Builds the full input string
let operator = ""; // Tracks the current operator (optional)

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const className = event.target.className;
    const buttonText = button.innerText;

    if (className === "button") {

      values += buttonText;
      document.querySelector(".display").innerText = values;


    } else if (className.includes("operator")) {
      document.querySelector(".display").innerText = "0";
      if(operator != "") {
        document.querySelector("button operator").disabled = true;
      }
      if (values != "") {
        operator = buttonText
        ans += values;
        values = ""
      }
      else{
        ans += buttonText
      }
      

      ans += operator;
      document.querySelector(".display").innerText = ans;

    } else if (className.includes("equals")) {
      ans += values;
      console.log(ans);
      let result  = "0"
      if (ans != "") {
        result = eval(ans.replace("×", "*").replace("÷", "/"));
        console.log(result);
        values = ""
        operator = ""
        ans = result;
        document.querySelector(".display").innerText = result;
      }

      document.querySelector(".display").innerText = result;



    } else if (className.includes("clear")) {

      ans = ""
      values = ""
      operator = ""
      document.querySelector(".display").innerText = 0;
    }
    else if(className.includes("back")) {
      if (values != "") {
        operator = buttonText
        ans += values;
        values = ""
      }
      ans=ans.slice(0,-1)
      document.querySelector(".display").innerText = ans;
      if(ans == "") {
        document.querySelector(".display").innerText = "0";

      }

    }
  });
});


