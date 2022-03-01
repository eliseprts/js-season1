
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {



    document.getElementById("run").addEventListener("click", function friday13(year) {

        var year = document.getElementById("year").value;
        let monthsWithFri13 = [];
        let day = new Date();
        let month;
        for (month = 0; month < 12; month++) {
            day.setFullYear(year, month, 13);
            if (day.getDay() == 5) {
                monthsWithFriday13.push(month);
            }
        }
        alert("In " + year + ", there was a Friday 13th in " + monthsWithFri13);
        console.log(monthsWithFri13);
    })

})();
