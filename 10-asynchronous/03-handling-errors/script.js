// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons((error, persons) => {
            if (error) {
                console.error("Erreur")
            }
            for (let elem of persons) {
                console.log(elem);
            }
        })
    })

})();
