// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        let numbers = [document.getElementById("numbers").value];
        // let numbers = [4, 2, 5, 1, 3];
        numbers.sort((a, b) => a - b);
        alert(numbers);
        // document.getElementById("numbers").value = numbers;

    });

})();
