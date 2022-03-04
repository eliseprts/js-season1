// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    document.getElementById("run").addEventListener("click", function passwordCheck2() {
        let passwordA = document.getElementById("pass-one").value;
        let passwordB = document.getElementById("pass-two").value;
        if (passwordA != passwordB) {
            let b = document.querySelectorAll("input");
            for (let elem of b) {
                elem.setAttribute("class", "error");
            }
        }
    })

})();
