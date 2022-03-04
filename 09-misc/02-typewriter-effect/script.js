// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    document.getElementById("target").innerHTML = "";

    var textArr = ["Je suis un texte qui va apparaître dans un effet 'machine à écrire', un peu comme dans les films noirs. Sauf que...je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères!"];

    var textPosition = 0;
    var speed = Math.floor(Math.random() * 151);

    function typewrite() {
        document.querySelector("#target").innerHTML = textArr[0].substring(0, textPosition);
        if (textPosition++ != textArr[0].length) {
            setTimeout(typewrite, speed);
        }
    }

    typewrite()

})();
