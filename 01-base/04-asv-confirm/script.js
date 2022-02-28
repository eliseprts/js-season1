
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    function askInfo() {
        let userAge = prompt("What is your age ?");
        let userGender = prompt("What is your gender ?");
        let userTown = prompt("Where do you live?");
        let result = confirm("You are " + userAge + " years old, your gender is " + userGender + " and you live in " + userTown + ". Do you confirm ?");
        if (result == true) {
            alert("Welcome!");
        }
        else {
            askInfo();
        }
    }
    askInfo();
})();
