// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    var targetElem = document.getElementById("target");
    targetElem.innerHTML = "";

    // ADD SPANS
    var span1 = document.createElement("span");
    targetElem.appendChild(span1);

    var span2 = document.createElement("span");
    targetElem.appendChild(span2);

    var span3 = document.createElement("span");
    targetElem.appendChild(span3);

    var span4 = document.createElement("span");
    targetElem.appendChild(span4);

    // GENERATE RANDOM NUMBERS

    var arrButtons = document.querySelectorAll("button");

    document.getElementById("part-one").addEventListener("click", function randomNbr1(min, max) {
        min = parseInt(arrButtons[0].getAttribute("data-min"));
        max = parseInt(arrButtons[0].getAttribute("data-max"));
        let nbr = Math.floor(Math.random() * (max - min + 1)) + min;
        span1.innerHTML = "0" + nbr;

    })

    document.getElementById("part-two").addEventListener("click", function randomNbr2(min, max) {
        min = parseInt(arrButtons[1].getAttribute("data-min"));
        max = parseInt(arrButtons[1].getAttribute("data-max"));
        let nbr = Math.floor(Math.random() * (max - min + 1)) + min;
        span2.innerHTML = nbr;

    })

    document.getElementById("part-three").addEventListener("click", function randomNbr3(min, max) {
        min = parseInt(arrButtons[1].getAttribute("data-min"));
        max = parseInt(arrButtons[1].getAttribute("data-max"));
        let nbr = Math.floor(Math.random() * (max - min + 1)) + min;
        span3.innerHTML = nbr;

    })

    document.getElementById("part-four").addEventListener("click", function randomNbr4(min, max) {
        min = parseInt(arrButtons[1].getAttribute("data-min"));
        max = parseInt(arrButtons[1].getAttribute("data-max"));
        let nbr = Math.floor(Math.random() * (max - min + 1)) + min;
        span4.innerHTML = nbr;

    })

})();
