//DOM ELEMENTS
const vision = document.getElementById("vision");
const sword = document.getElementById("sword");
const shield = document.getElementById("shield");
const magic = document.getElementById("magic");
const bag = document.getElementById("bag");
const screenText = document.querySelector(".screen-text");
const returnBtn = document.getElementById("return");

const skill1 = document.getElementById("skill1");
const skill2 = document.getElementById("skill2");
const skill3 = document.getElementById("skill3");

// sword.addEventListener("click", attack)

function attack (){
const textCombat = document.createElement("p");
screenText.appendChild(textCombat);
textCombat.innerText = "Normal hit on target.";
screenText.scrollTop = screenText.scrollHeight;
}

// shield.addEventListener("click", defense)

function defense (){
  const textCombat = document.createElement("p");
  screenText.appendChild(textCombat);
  textCombat.innerText = "Defensive stance, you will reduce the incoming damage by 30%.";
  screenText.scrollTop = screenText.scrollHeight;
  }


// magic.addEventListener("click", openMenuMagic)

function openMenuMagic (){
  console.log("bonjour");
  shield.classList.remove("controls");
  shield.classList.add("controls-hidden");
  sword.classList.remove("controls");
  sword.classList.add("controls-hidden");
  vision.classList.remove("controls");
  vision.classList.add("controls-hidden");
  bag.classList.remove("controls");
  bag.classList.add("controls-hidden");
  skill1.classList.remove("controls-hidden");
  skill1.classList.add("controls");
  skill2.classList.remove("controls");
  skill2.classList.add("controls");
  skill3.classList.remove("controls");
  skill3.classList.add("controls");
  returnBtn.classList.remove("controls");
  returnBtn.classList.add("controls");
}

// returnBtn.addEventListener("click", CloseMenuMagic)

function CloseMenuMagic (){
  shield.classList.add("controls");
  shield.classList.remove("controls-hidden");
  sword.classList.add("controls");
  sword.classList.remove("controls-hidden");
  vision.classList.add("controls");
  vision.classList.remove("controls-hidden");
  bag.classList.add("controls");
  bag.classList.remove("controls-hidden");
  skill1.classList.add("controls-hidden");
  skill1.classList.remove("controls");
  skill2.classList.add("controls");
  skill2.classList.remove("controls");
  skill3.classList.add("controls");
  skill3.classList.remove("controls");
  returnBtn.classList.add("controls");
  returnBtn.classList.remove("controls");
}


export {vision, sword, shield, magic, bag, screenText,
returnBtn, skill1, skill2, skill3, attack, defense,
openMenuMagic, CloseMenuMagic}
