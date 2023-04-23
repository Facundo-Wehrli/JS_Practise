/* This code is selecting HTML elements with the IDs "btn0" through "btn9" and assigning them to
corresponding constants named btn0 through btn9. These constants can then be used in JavaScript code
to manipulate or interact with those HTML elements. */
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

const bntAdd = document.getElementById("btn-add");
const btnSubstract = document.getElementById("btn-substract");
const btnDecimal = document.getElementById("btn-decimal");
const btnDivide = document.getElementById("btn-divide");
const btnClear = document.getElementById("btn-clear");
const btnEquals = document.getElementById("btn-equals");
const btnBackspace = document.getElementById("btn-backspace");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

function handleClick(number) {
    if (number === "-" || number === "+" || number === "/" || number === "*" || number === "C" || number === "=" || number === "." || number === "&#x2190;") {
        return;
    }

    display.textContent += number;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const number = button.textContent;
        handleClick(number);
    });
});

//TODO funcion para sumar 
display.addEventListener("click", () => { });
bntAdd.addEventListener("click", () => { })
btnSubstract.addEventListener("click", () => { })
btnDecimal.addEventListener("click", () => { })
btnDivide.addEventListener("click", () => { })
btnClear.addEventListener("click", () => { })
//TODO funcion para mostrar el resultado
btnEquals.addEventListener("click", () => { })
btnBackspace.addEventListener("click", () => { })



