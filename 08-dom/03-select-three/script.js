// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    function replace() {
        var target = document.querySelectorAll(".target");
        for (var i = 0; i < target.length; i++) {
            target[i].innerHTML = "owned";
        }
    }
    replace();

})();
