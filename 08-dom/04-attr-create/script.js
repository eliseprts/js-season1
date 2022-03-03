// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // RÉCUPÉRER DATA-IMAGE
    let source = document.getElementById("source");
    let dataImage = source.getAttribute("data-image");

    // CRÉER ÉLÉMENT IMG
    let figure = document.getElementById("target");
    let img = document.createElement("img");
    figure.appendChild(img);

    // AJOUT SRC = DATA-IMAGE
    img.src = dataImage;

})();
