
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function addition() {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        let resultAdd = Number(num1) + Number(num2);
        alert("The result is " + resultAdd);
    });

    document.getElementById("substraction").addEventListener("click", function substraction() {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        let resultSub = Number(num1) - Number(num2);
        alert("The result is " + resultSub);
    });

    document.getElementById("multiplication").addEventListener("click", function multiplication() {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        let resultMult = Number(num1) * Number(num2);
        alert("The result is " + resultMult);
    });

    document.getElementById("division").addEventListener("click", function division() {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        let resultDiv = Number(num1) / Number(num2);
        alert("The result is " + resultDiv);
    });
})();
