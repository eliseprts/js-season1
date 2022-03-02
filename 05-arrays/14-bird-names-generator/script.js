// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", function birdGenerator() {

        // RANDOM BIRD
        let randomBird = birds[Math.floor(Math.random() * birds.length)];

        // RANDOM ADJECTIVE
        let randomAdjective;
        function getRandomAdjective(adjectives) {
            let arrAdjectives = Array.from(adjectives);
            randomAdjective = arrAdjectives[Math.floor(Math.random() * arrAdjectives.length)];
        }
        getRandomAdjective(adjectives);

        // SENTENCE
        if (randomBird.fem == true) {
            document.getElementById("target").innerHTML = "La " + randomBird.name + " " + randomAdjective + "e";
        }
        else {
            document.getElementById("target").innerHTML = "Le " + randomBird.name + " " + randomAdjective;
        }
    })

})();
