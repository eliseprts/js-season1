// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {

    document.getElementById("run").addEventListener("click", async () => {

        const response = await fetch("http://localhost:3000/heroes")
        const heroes = await response.json()

        class hero {
            constructor() {
                this.id = id;
                this.name = name;
                this.alterEgo = alterEgo;
                this.abilities = abilities;
            }
        }

        const newHeroName = document.getElementById("hero-name").value
        const newnewHeroAlterEgo = document.getElementById("hero-alter-ego").value
        const newHeroPowers = document.getElementById("hero-powers").value
        const arrHeroPowers = newHeroPowers.split(", ")
        const newHeroId = heroes.length + 1

        const newHero = new hero(
            this.id = newHeroId,
            this.name = newHeroName,
            this.alterEgo = newnewHeroAlterEgo,
            this.abilities = arrHeroPowers
        )

        heroes.push(newHero);

        console.log(heroes);

    })

})();
