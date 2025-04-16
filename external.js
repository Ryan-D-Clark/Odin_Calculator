let calculatorDisplay = document.getElementById("calculator-display")
let operators = document.getElementById("operators")


let firstValue = 0
let secondValue = 0
let currentValue = 0
let total = 0
let displayValue = ""
let operator = ""

for(let x = 0; x < 10; x++){
    let button = document.getElementById(x)
    button.addEventListener("click",  () => {
        displayValue += button.getAttribute("id")
        currentValue += button.getAttribute("id")
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
                secondValue = parseInt(currentValue)
                switch(operator){
                    case "+":
                        total = firstValue + secondValue
                        break
                    case "-":
                        total = firstValue - secondValue
                        break;
                    case "*":
                        total = firstValue * secondValue
                        
                }
            }
            displayValue = total
            refreshCalculatorDisplay()
            console.log("Equal pressed")
            console.log(total)
        }
        else{
            switch(child.id){
                case "+":
                    operator = "+"
                    firstValue = parseInt(currentValue)
                    displayValue += "+"
                    currentValue = 0
                    break
                case "-":
                    operator = "-"
                    firstValue = parseInt(currentValue)
                    displayValue += "-"
                    currentValue = 0
                    break
                case "x":
                    operator = "*"
                    firstValue = parseInt(currentValue)
                    displayValue += "x"
                    currentValue = 0
                    break
                case "/":
                    operator = "/"
                    firstValue = parseInt(currentValue)
                    displayValue += "/"
                    currentValue = 0
                    break
                case "C":
                    calculatorReset()
                    break
            }
        }
        refreshCalculatorDisplay()
        console.log("Operator", operator)
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

