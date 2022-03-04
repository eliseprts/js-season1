// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    var targetElem = document.getElementById("target");

    // TABLE
    var table = document.createElement("table");

    // ROWS AND CELLS
    for (i = 0; i <= 9; i++) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        row.appendChild(cell);
        // ADD CELLS TO TABLE
        table.appendChild(row);
    }

    // ADD TABLE TO TARGET
    targetElem.appendChild(table);

})();
