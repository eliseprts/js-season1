// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    document.getElementById("pass-one").addEventListener("input", function passwordCounter() {

        let password = document.getElementById("pass-one").value;
        let counter = document.getElementById("counter");

        for (i = 0; i <= 10; i++) {
            if (password.length == i) {
                counter.innerHTML = i + "/10";
            }
        }

        if (password.length == 10) {
            let inputMax = document.querySelector("input");
            inputMax.setAttribute("maxlength", "10");
        }

    })

})();
