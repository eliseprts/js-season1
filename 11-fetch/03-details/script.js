// 11-fetch/03-details/script.js - 11.3: details


(() => {

    document.getElementById("run").addEventListener("click", async () => {

        const response = await fetch("http://localhost:3000/heroes")
        const heroes = await response.json()

        const idHero = document.querySelector("#hero-id").value

        const targetElem = document.querySelector("#target")
        const heroElem = document.querySelector("#tpl-hero")

        for (let elem of heroes) {

            const clone = document.importNode(heroElem.content, true)
            const baliseLi = clone.querySelector(".hero")
            const baliseH4 = clone.querySelector(".title")
            const baliseStrong = clone.querySelector(".name")
            const baliseEm = clone.querySelector(".alter-ego")
            const baliseP = clone.querySelector(".powers")

            baliseStrong.textContent = elem.name
            baliseEm.textContent = elem.alterEgo
            baliseP.textContent = elem.abilities


            if (elem.id == idHero) {
                targetElem.appendChild(clone)
            }
        }

    })

})();
