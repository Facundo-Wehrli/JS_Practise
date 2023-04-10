// The code above contains two functions, multiplyBy() and divideBy(). The first function, multiplyBy(), takes the values of two elements with the ids "firstNumber" and "secondNumber" from the HTML document. It then multiplies these two numbers together and displays the result in an element with the id "result". The second function, divideBy(), does the same thing but divides the two numbers instead of multiplying them.

function multiplyBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
}