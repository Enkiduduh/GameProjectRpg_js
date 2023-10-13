//DOM ELEMENTS
const vision = document.getElementById("vision");
const sword = document.getElementById("sword");
const btnCool = document.getElementById("btn-cool");
const screenText = document.querySelector(".screen-text");

let msgCombat = "";


sword.addEventListener("click", attack)

function attack (){
 msgCombat.innerHTML = "Lancer une attaque normale!";
}


screenText
