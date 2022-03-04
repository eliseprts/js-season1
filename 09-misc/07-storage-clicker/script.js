// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    document.getElementById("increment").addEventListener("click", function incrementStore() {

        if (localStorage.counter) {
            localStorage.counter = Number(localStorage.counter) + 1;
        }
        else {
            localStorage.counter = 1;
        }
        document.getElementById("target").innerHTML = localStorage.counter;

    })

})();
