// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {

    document.getElementById("run").addEventListener("click", async () => {

        let response = await fetch("http://localhost:3000/heroes")
        let heroes = await response.json()
        console.log(heroes)
    })

})();
