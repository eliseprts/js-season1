// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    document.getElementById("run").addEventListener("click", function randomArr() {

        // RANDOM ARRAY
        let arr = [];
        function displayRandomArr() {
            for (i = 0; i < 10; i++) {
                let num = Math.floor(Math.random() * 101);
                arr.push(num);
            }
        }
        displayRandomArr();
        console.log(arr);

        // function displayInTable(element) {
        //     for (i = 1; i <= 10; i++) {
        //         document.getElementById("n-" + i).innerHTML = element;
        //     }
        // }
        // arr.forEach(displayInTable);

        // DISPLAY ARRAY IN TABLE
        document.getElementById("n-1").innerHTML = arr[0];
        document.getElementById("n-2").innerHTML = arr[1];
        document.getElementById("n-3").innerHTML = arr[2];
        document.getElementById("n-4").innerHTML = arr[3];
        document.getElementById("n-5").innerHTML = arr[4];
        document.getElementById("n-6").innerHTML = arr[5];
        document.getElementById("n-7").innerHTML = arr[6];
        document.getElementById("n-8").innerHTML = arr[7];
        document.getElementById("n-9").innerHTML = arr[8];
        document.getElementById("n-10").innerHTML = arr[9];

        // SMALLEST NUMBER
        let min = Math.min(...arr);
        document.getElementById("min").innerHTML = min;

        // BIGGEST NUMBER
        let max = Math.max(...arr);
        document.getElementById("max").innerHTML = max;

        // SUM OF ALL NBRS
        let sum = 0;
        for (let elem of arr) {
            sum = sum + elem;
        }
        document.getElementById("sum").innerHTML = sum;

        // AVERAGE OF ALL NBRS
        let averageValue = sum / arr.length;
        document.getElementById("average").innerHTML = averageValue;

    })

})();
