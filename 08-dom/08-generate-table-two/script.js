// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    var targetElem = document.getElementById("target");

    // TABLE
    var table = document.createElement("table");

    // ROWS AND CELLS
    for (r = 1; r <= 10; r++) {
        var row = document.createElement("tr");
        for (c = 1; c <= 10; c++) {
            var cell = document.createElement("td");
            row.appendChild(cell);
            for (i = 1; i <= 10; i++) {
                let result = r * c;
                cell.innerHTML = result;
            }
        }
        table.appendChild(row);

    }

    // ADD TABLE TO TARGET
    targetElem.appendChild(table);

})();
