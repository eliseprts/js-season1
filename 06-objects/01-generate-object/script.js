// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {

    document.getElementById("run").addEventListener("click", function generateObject() {
        let me = {
            lastname: "Pourtois",
            firstname: "Elise",
            age: 29,
            city: "Limal",
            country: "Belgium"
        }
        console.log(me);
    })

})();
