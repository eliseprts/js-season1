// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {

    document.getElementById("run").addEventListener("click", async () => {

        try {
            const persons = await window.lib.getPersons();
            console.log(persons);
        } catch {
            console.error("Erreur")
        }
    })

})();
