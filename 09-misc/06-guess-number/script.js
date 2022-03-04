// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    function guessNbr() {

        let randomNbr = Math.floor(Math.random() * 100) + 1;
        console.log(randomNbr);

        for (i = 1; i <= 100; i++) {

            let guessNbr = prompt("Guess a number between 1 and 100");

            if (guessNbr == randomNbr) {
                alert("You're right! You needed " + i + " guesses");
                break;
            }
            else if (guessNbr > randomNbr) {
                alert("Lower... Try again");
            }
            else if (guessNbr < randomNbr) {
                alert("Higher... Try again");
            }

        }
    }

    guessNbr();

    //     let guessNbr = prompt("Guess a number between 1 and 100");
    //     if (guessNbr > randomNbr) {
    //         alert("Lower!");
    //         guessNbr();

    //     }
    //     else if (guessNbr < randomNbr) {
    //         alert("Higher!");
    //         guessNbr
    //     }
    //     else if (guessNbr == randomNbr) {
    //         alert("That's it!");
    //     }
    // }



})();
