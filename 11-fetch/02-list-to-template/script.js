

(() => {

    const targetElem = document.querySelector("#target")
    const heroElem = document.querySelector("#tpl-hero")

    document.getElementById("run").addEventListener("click", async () => {

        let response = await fetch("http://localhost:3000/heroes")
        let heroes = await response.json()

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

            targetElem.appendChild(clone)

        }

    })

})();
