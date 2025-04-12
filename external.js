let calculatorDisplay = document.getElementById("calculator-display")
let operators = document.getElementById("operators")


let firstValue = 0
let secondValue = 0
let total = 0
let displayValue = ""
let operator = ""

for(let x = 0; x < 10; x++){
    let button = document.getElementById(x)
    button.addEventListener("click",  () => {
        displayValue += button.getAttribute("id")
        refreshCalculatorDisplay()
    })
}

for(let child of operators.children){
    child.addEventListener("click", () =>{
        if(child.id == "="){
            if(operator == ""){
                displayValue = "N/A"
                refreshCalculatorDisplay()
                calculatorReset()
            }
            else{
                switch(operator){
                    case "+":
                        total = firstValue + secondValue
                        break
                    case "-":
                        
                }
            }
        }
    })
}

function refreshCalculatorDisplay(){
    calculatorDisplay.innerText = displayValue
}

function calculatorReset(){
    firstValue = 0
    secondValue = 0
    total = 0
    displayValue = ""
    operator = ""
}

