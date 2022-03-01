
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let today = new Date();

    let year = today.getFullYear();
    let date = today.getDate();
    let hours = today.getHours();
    let mins = today.getMinutes();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = months[today.getMonth()];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[today.getDay()];

    let formattedDate = dayName + " " + date + " " + monthName + " " + year + ", " + hours + "h" + mins;

    document.getElementById("target").innerHTML = formattedDate;

})();
