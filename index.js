const display = document.querySelector("input");
const btn = document.querySelectorAll("button");

let expression = "";
btn.forEach(btn => {
    btn.addEventListener("click",function(){
        let value = btn.innerText;
        if(value === "AC"){
            expression = "";
            display.value = expression;
        }
        else if(value === "="){
            try{
                expression = eval(expression);
                display.value = expression;
            } 
            catch{
                display.value = "Error";
            }
        }
        else if(value === "x"){
            expression = expression + '*';
            display.value = expression;
        }
        else if(value === ""){
            expression = expression.slice(0,-1);
            display.value = expression;
        }
        else{
            expression+=value;
            display.value = expression;
        }
    })
})
