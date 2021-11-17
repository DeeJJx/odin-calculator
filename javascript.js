function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


// console.log(add(2, 5));
// console.log(subtract(2, 5));
// console.log(multiply(2, 5));
// console.log(divide(2, 5));

function operate(a, b, c){
    let str = c.toLowerCase();
    if(str == "add"){
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

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const operateButton = document.getElementById("operate");
const clear = document.getElementById("clear");

let displayValue = "";
let operator = "";

one.addEventListener('click', event => {
    addOneToDisplay();
})
function addOneToDisplay() {

    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = "1";
    para1.style['color'] = 'red';
    display.appendChild(para1);
    return displayValue = displayValue + '1';
};

two.addEventListener('click', event => {
    addTwoToDisplay();
})
function addTwoToDisplay() {

    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = "2";
    para1.style['color'] = 'red';
    display.appendChild(para1);
    return displayValue = displayValue + '2';
};

three.addEventListener('click', event => {
    addThreeToDisplay();
})
function addThreeToDisplay() {

    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = "3";
    para1.style['color'] = 'red';
    display.appendChild(para1);
    return displayValue = displayValue + '3';
};

four.addEventListener('click', event => {
    addFourToDisplay();
})
function addFourToDisplay() {

    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = "4";
    para1.style['color'] = 'red';
    display.appendChild(para1);
    return displayValue = displayValue + '4';
};

five.addEventListener('click', event => {
    addFiveToDisplay();
})
function addFiveToDisplay() {

    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = "5";
    para1.style['color'] = 'red';
    display.appendChild(para1);
    return displayValue = displayValue + '5';
};

six.addEventListener('click', event => {
    addSixToDisplay();
})
function addSixToDisplay() {

    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = "6";
    para1.style['color'] = 'red';
    display.appendChild(para1);
    return displayValue = displayValue + '6';
};

seven.addEventListener('click', event => {
    addSevenToDisplay();
})
function addSevenToDisplay() {
    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = "7";
    para1.style['color'] = 'red';
    display.appendChild(para1);
    return displayValue = displayValue + '7';
};

eight.addEventListener('click', event => {
    addEightToDisplay();
})
function addEightToDisplay() {

    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = "8";
    para1.style['color'] = 'red';
    display.appendChild(para1);
    return displayValue = displayValue + '8';
};

nine.addEventListener('click', event => {
    addNineToDisplay();
})
function addNineToDisplay() {
    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = "9";
    para1.style['color'] = 'red';
    display.appendChild(para1);
    return displayValue = displayValue + '9';
};

zero.addEventListener('click', event => {
    addZeroToDisplay();
})
function addZeroToDisplay() {
    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = "0";
    para1.style['color'] = 'red';
    display.appendChild(para1);
    return displayValue = displayValue + '0';
};


clear.addEventListener('click', event => {
    clearDisplay();
    showDisplayValue();
});

function clearDisplay() {
    document.getElementById("display").innerHTML = "";
    return displayValue = '';
};


function showDisplayValue(){
    console.log(displayValue);
}

function showTotalValue(total){
    clearDisplay();
    const para1 = document.createElement('p');
    para1.classList.add('para1');
    para1.textContent = `${total}`;
    para1.style['color'] = 'red';
    display.appendChild(para1);
}


let numbersArray = [];

function pushToArray(){
    numbersArray.push(displayValue);
}

addButton.addEventListener('click', () => {
    pushToArray();
    clearDisplay();
    return operator = "add";
})


operateButton.addEventListener('click', () => {
    let total;
    pushToArray();
    total = operate(numbersArray[0], numbersArray[1], operator);
    numbersArray = [];
    numbersArray.push(total);
    showTotalValue(total);
    //return displayValue = total;
})