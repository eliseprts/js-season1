// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    document.getElementById("slider").addEventListener("input", function generatePhoneNumber() {
        let val = document.querySelector("#slider").value;
        document.querySelector("#target").innerHTML = val;
    })

})();
