// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        let values = document.getElementById("numbers").value;
        const numbers = values.split(",");
        numbers.sort((a, b) => a - b);
        document.getElementById("numbers").value = numbers;

    });

})();
