// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    var arrInput = document.querySelectorAll("input");

    document.getElementById("fix-part-one").addEventListener("click", function randomNbr1() {
        let val = document.querySelector("#part-one").value;
        min = parseInt(arrInput[0].getAttribute("data-min"));
        max = parseInt(arrInput[0].getAttribute("data-max"));
        val = Math.floor(Math.random() * (max - min + 1)) + min;
    })
})();
