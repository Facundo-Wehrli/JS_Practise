const btn0 = document.getElementById("btn0");
btn0.addEventListener("click", function () {
    let output = output.getElementById("output")
    /* assigning the current text content of the HTML
    element with the ID "display" to the variable `displayValue`. This allows the current value
    displayed on the screen to be stored in a variable and manipulated later. */
    let outputValue = output.innerText;

    /* appending the number 0 to the current value of `displayValue`. This is
    equivalent to `displayValue = displayValue + 0;`. In this case, it is used to add the number 0
    to the current value displayed on the screen when the button with the ID "btn0" is clicked. */
    outputValue += "0";

    /* setting the text content of the `display` element to the
    value of `displayValue`. This means that when the button with the ID "btn0" is clicked, the
    number 0 is added to the current value displayed on the screen. */
    output.innerText = outputValue;

})