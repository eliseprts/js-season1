// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    document.getElementById("pass-one").addEventListener("input", function passwordOk() {

        let password = document.getElementById("pass-one").value;
        let numbers = /[0 - 9]/g;
        let indicator = document.getElementById("validity");

        if ((password.length >= 8) && (password.match(numbers))) {
            indicator.innerHTML = "ok";
        }
        else {
            indicator.innerHTML = "Not ok";
        }

    })

})();
