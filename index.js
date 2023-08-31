function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

let first;
let operator;
let second;

function operate(operator, first, second) {
    switch (operator.toLowerCase()) {
        case "add":
            return add(first, second);
            break;
        case "substract":
            return subtract(first, second);
            break;
        case "multiply":
            return multiply(first, second);
            break;
        case "divide":
            return divide(first, second);
            break;    
        default:
            return "not a valid operator"
            break;
    }
}

let clear = document.querySelector("#clear");
let display = document.querySelector("#display");
let remove = document.querySelector("#delete");
let buttons = document.querySelectorAll(".button");
let content = display.textContent;

clear.addEventListener("click", function () {
    content = "0";
    display.textContent = content
});

remove.addEventListener("click", function () {
    content = content.slice(0, content.length -2);
    display.textContent = content;
})

buttons.forEach(button => button.addEventListener("click", function() {
    if (button.textContent == "=") {
        return;
    }
    content = display.textContent.concat(button.textContent + " ");
    if ((content.split(" ").length > 3)) {
        determine();
    }
    display.textContent = content;
    console.log(content);
    console.log("working");
}))


let equal = document.querySelector(".equal");
equal.addEventListener("click", function() {
    determine();
    display.textContent = content;  
})

function determine() {
    let array = content.split(" ");
    console.log(array[0]);
    console.log(array);
    switch(array[1]) {
        case "+":
            content = operate("add", Number(array[0]), Number(array[2])) + " ";
            break;
        case "-":
            content = operate("subtract", Number(array[0]), Number(array[2])) + " ";
            break;
        case "x":
            content = operate("multiply", Number(array[0]), Number(array[2])) + " ";
            break;
        case "/":
            content = operate("divide", Number(array[0]), Number(array[2])) + " ";
            break;
    }
}