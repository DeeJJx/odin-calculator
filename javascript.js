function add(a, b) {
    return Math.round(( a + b)* 100) / 100;
}

function subtract(a, b) {
    return Math.round(( a - b)* 100) / 100;
}

function multiply(a, b) {
    return Math.round(( a * b)* 100) / 100;
}

function divide(a, b) {
    return Math.round(( a / b)* 100) / 100;
}

function operate(a, b, c){
    a = Number(a);
    b = Number(b);
    let str = c.toLowerCase();
    if (str == "divide" && b == 0){
        return "Cannot divide by zero idiot";
    } else if(str == "add"){
        return add(a, b);
    } else if (str == "subtract") {
        return subtract(a, b);
    } else if (str == "multiply"){
        return multiply(a, b);
    } else if (str == "divide"){
        return divide(a, b);
    }
}

const display = document.getElementById("display");

const digitKeys = document.querySelectorAll(".digit");
const operatorKeys = document.querySelectorAll(".operator");
const operateButton = document.getElementById("operate");
const decimalButton = document.getElementById("decimal")
const clear = document.getElementById("clear");
const undoButton = document.getElementById("undo");


function handleOperator(event){
    let newOperator = event.target.id;
    if(firstValue){
        console.log("displayValue && sv && operator is true");
        firstValue = operate(firstValue, displayValue, operator);
        operator = newOperator;
        console.log(firstValue);
        clearDisplay();
    } else if (operator) {
        operator = newOperator;
    } else if (!operator) {
        firstValue = displayValue;
        operator = newOperator;
        clearDisplay();
    }
}

function handleEquals(){
    if(firstValue){
        console.log("displayValue && sv && operator is true && inside handle equals");
        firstValue = operate(firstValue, displayValue, operator);
        console.log(firstValue);
        displayValue = "";
    } else if (!operator){
        firstValue = displayValue;
    }
}

function handleUndo(){
    let str = displayValue;
    let newStr = str.slice(0, -1);
    displayValue = newStr;
    console.log(displayValue);
}

function handleDigit(event){
    displayValue = displayValue + event.target.value;
    console.log(displayValue);
}

function handleDecimal(event){
    if(!decimal){
        displayValue = displayValue + event.target.value;
        decimal = event.target.value;
        console.log(displayValue);
    }
}

decimalButton.addEventListener('click', handleDecimal);
undoButton.addEventListener('click', handleUndo);

digitKeys.forEach( function(key) {
    key.addEventListener("click", handleDigit);
})

operatorKeys.forEach( function(key) {
    key.addEventListener("click", handleOperator)
})

operateButton.addEventListener('click', () => {
    handleEquals();
})



let displayValue = "";
let decimal = "";
let firstValue = "";
let secondValue = "";
let operator = "";


clear.addEventListener('click', event => {
    hardReset();
    showDisplayValue();
});

function clearDisplay() {
    document.getElementById("display").innerHTML = "";
    displayValue = "";
    decimal = "";
};

function hardReset() {
    document.getElementById("display").innerHTML = "";
    displayValue = "";
    operator = "";
    firstValue = "";
    decimal = "";
}

function showDisplayValue(){
    console.log(displayValue);
};


