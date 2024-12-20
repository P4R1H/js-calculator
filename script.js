const output = document.getElementById("result");
const buttons = document.getElementById("numbers");
const operators = document.getElementById("operators");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let currentNumber = "";
let previousNumber = "";
let operation = null;

buttons.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.id !== "clear") {
        currentNumber += e.target.textContent;
        output.value = currentNumber;
    }
});

operators.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.id !== "equals") {
        previousNumber = currentNumber;
        currentNumber = "";
        operation = e.target.textContent;
    }
});

equals.addEventListener("click", () => {
    if (previousNumber && currentNumber && operation) {
        const num1 = parseFloat(previousNumber);
        const num2 = parseFloat(currentNumber);
        let result;

        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Error";
                break;
        }

        output.value = result;
        currentNumber = result.toString();
        previousNumber = "";
        operation = null;
    }
});

clear.addEventListener("click", () => {
    currentNumber = "";
    previousNumber = "";
    operation = null;
    output.value = "";
});