
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {



    document.getElementById("run").addEventListener("click", function friday13(year) {

        var year = document.getElementById("year").value;
        let monthsWithFri13Nbr = [];
        let monthsWithFri13Name = [];
        let monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = new Date();
        let month;

        for (month = 0; month < 12; month++) {
            day.setFullYear(year, month, 13);
            if (day.getDay() == 5) {
                monthsWithFri13Nbr.push(month);
            }
        }

        for (let elem of monthsWithFri13Nbr) {
            monthsWithFri13Name.push(monthsName[elem]);
        }


        alert("In " + year + ", there was a Friday 13th in " + monthsWithFri13Name);
        console.log(monthsWithFri13Name);
    })

})();
