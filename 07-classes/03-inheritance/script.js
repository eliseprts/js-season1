// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        constructor(name, greeting) {
            this.name = name;
            this.greeting = greeting;
        }
        sayHello() {
            return `${this.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        constructor(name, greeting) {
            super(name, greeting);
        }
        catSayHello() {
            super.sayHello();
        }
    }

    class Dog extends Animal {
        constructor(name, greeting) {
            super(name, greeting);
        }
        dogSayHello() {
            super.SayHello();
        }
    }

    document.getElementById("run").addEventListener("click", function catAndDog() {

        let cat1 = new Cat("Pixel", "Miaou");
        console.log(cat1.sayHello());
        const dog1 = new Dog("Nestor", "Ouaf");
        console.log(dog1.sayHello());

    })

})();
