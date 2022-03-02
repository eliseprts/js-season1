// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    document.getElementById("run").addEventListener("click", function fromEntries() {
        const entries = new Map([
            keys,
            values
        ]);
        const obj = Object.fromEntries(entries);
        console.log(obj);
    })

})();
