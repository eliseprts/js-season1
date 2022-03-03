// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {

    class Person {

        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            var fullName = this.firstname + " " + this.lastname;
            return fullName;
        }

        set name(newName) {
            let [firstname, lastname] = fullname.split(" ");
            this.firstname = newName;
        }
    }

    document.getElementById("run").addEventListener("click", function displayPerson() {

        let person1 = new Person("Elise", "Pourtois");
        console.log(person1.name);
        person1.name = "Sophie";
        console.log(person1.name);

    })

})();
