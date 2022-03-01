
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    document.getElementById("run").addEventListener("click", function calculateAge() {

        let today = new Date();
        console.log(today);

        let userDay = document.getElementById("dob-day").value;
        let userMonth = document.getElementById("dob-month").value;
        let userYear = document.getElementById("dob-year").value;

        let age = today.getFullYear() - userYear;

        if (userMonth > today.getMonth()) {
            age--;
        }

        if ((userMonth == today.getMonth()) && (userDay > today.getDate())) {
            age--;
        }

        alert("You are " + age + " old.");

    })

})();
