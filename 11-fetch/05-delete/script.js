// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {

    document.getElementById("run").addEventListener("click", async () => {

        const response = await fetch("http://localhost:3000/heroes")
        const heroes = await response.json()

        const idHero = document.getElementById("hero-id").value
        const elementHeroes = idHero - 1;

        heroes.splice(elementHeroes, 1)

        console.log(heroes)

    })

})();
