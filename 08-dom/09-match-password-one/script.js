// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    document.getElementById("run").addEventListener("click", function passwordCheck() {
        let password1 = document.getElementById("pass-one").value;
        let password2 = document.getElementById("pass-two").value;
        if (password1 != password2) {
            let b = document.querySelectorAll("input");
            for (let elem of b) {
                elem.style.borderColor = "red";
            }
        }
    })

})();
