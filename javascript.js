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

console.log(operate(2, 5, 'add'));
console.log(operate(2, 5, 'subtract'));
console.log(operate(2, 5, 'MULTIPLY'));
console.log(operate(2, 5, 'DIVIDE'));