const previousOperationText = document.querySelector("#previous-operation");
const currentOperationtext = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {}

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        console.log(value)
    })
})