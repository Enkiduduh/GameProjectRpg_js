//DOM ELEMENTS
const vision = document.getElementById("vision");
const sword = document.getElementById("sword");
const shield = document.getElementById("shield");
const btnCool = document.getElementById("btn-cool");
const screenText = document.querySelector(".screen-text");

sword.addEventListener("click", attack)

function attack (){
const textCombat = document.createElement("p");
screenText.appendChild(textCombat);
textCombat.innerText = "Normal hit on target.";
screenText.scrollTop = screenText.scrollHeight;
}

shield.addEventListener("click", defense)

function defense (){
  const textCombat = document.createElement("p");
  screenText.appendChild(textCombat);
  textCombat.innerText = "Defensive stance, you will reduce the incoming damage by 30%.";
  screenText.scrollTop = screenText.scrollHeight;
  }
