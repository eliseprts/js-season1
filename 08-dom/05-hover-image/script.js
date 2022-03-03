// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    let elem = document.querySelector("img");
    let dataHover = elem.getAttribute("data-hover");
    let dataOut = elem.getAttribute("src");

    elem.addEventListener("mouseover", function () {
        elem.src = dataHover;
    })

    elem.addEventListener("mouseout", function () {
        elem.src = dataOut;
    })

})();
