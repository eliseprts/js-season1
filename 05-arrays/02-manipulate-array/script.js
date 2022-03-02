// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function transformFruits() {
        fruits.shift();
        fruits.pop();
        fruits.unshift("banana");
        fruits.push("kiwi");
        console.log(fruits);
    })

})();
