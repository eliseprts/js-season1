
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        let number = document.getElementById("number").value;
        function factorialize(number) {
            if (number == 0 || number == 1) {
                document.getElementById("number").value = 1;
            }
            for (let i = number - 1; i >= 1; i--) {
                number = number * i;
                document.getElementById("number").value = number;
            }
        }
        factorialize(number);

    });

})();
