// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", function presence() {
        console.log("Is there an apple in the array ? ");
        function apple(element) {
            if (element == "apple") {
                console.log("Yes");
            }
        }
        fruits.forEach(apple);
    })

})();
