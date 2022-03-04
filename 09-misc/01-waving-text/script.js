// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    let targetElem = document.getElementById("target");
    targetElem.innerHTML = "";

    let span1 = document.createElement("span");
    span1.innerHTML = "Woo-hoo! ";
    span1.style.fontSize = "14px";

    let span2 = document.createElement("span");
    span2.innerHTML = "I'm making ";
    span2.style.fontSize = "20px";

    let span3 = document.createElement("span");
    span3.innerHTML = "waves! ";
    span3.style.fontSize = "30px";

    let span4 = document.createElement("span");
    span4.innerHTML = "Wééééé! ";
    span4.style.fontSize = "36px";

    let span5 = document.createElement("span");
    span5.innerHTML = " Oh... I think ";
    span5.style.fontSize = "28px";

    let span6 = document.createElement("span");
    span6.innerHTML = "I'm having ";
    span6.style.fontSize = "20px";

    let span7 = document.createElement("span");
    span7.innerHTML = "seasickness...";
    span7.style.fontSize = "16px";

    targetElem.appendChild(span1);
    targetElem.appendChild(span2);
    targetElem.appendChild(span3);
    targetElem.appendChild(span4);
    targetElem.appendChild(span5);
    targetElem.appendChild(span6);
    targetElem.appendChild(span7);

})();
