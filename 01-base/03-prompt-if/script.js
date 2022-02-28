
// 01-base/03-prompt-if/script.js - 1.3: promp & if

(() => {
  let userCake = prompt("Do you want some cake ? Answer yes or no.");
  if ((userCake == "yes") || (userCake == "Yes")) {
    alert("Congratulation!");
  }
  else {
    alert("More cake for me then !")
  }
})();

