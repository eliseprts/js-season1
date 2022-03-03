//07-classes/02-methods/script.js - 7.2: methods


(() => {

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello() {
            console.log("Hello, " + this.firstname + " " + this.lastname + " !");
        }
    }

    document.getElementById("run").addEventListener("click", function createPerson() {
        new Person("Elise", "Pourtois").sayHello();
    })

})();
