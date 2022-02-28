
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {

        var num1 = document.getElementById("op-one").value;
        var num2 = document.getElementById("op-two").value;
        var addition = document.getElementById("addition");
        var substraction = document.getElementById("substraction");
        var multiplication = document.getElementById("multiplication");
        var division = document.getElementById("division");
        var result;

        switch (operation) {
            case "addition": {
                result = Number(num1) + Number(num2);
                alert(result);
                break;
            }

            case "substraction": {
                result = Number(num1) - Number(num2);
                alert(result);
                break;
            }

            case "multiplication": {
                result = Number(num1) * Number(num2);
                alert(result);
                break;
            }

            case "division": {
                result = Number(num1) / Number(num2);
                alert(result);
            }
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );

})();
