//DOM ELEMENTS
const vision = document.getElementById("vision");
const sword = document.getElementById("sword");
const btnCool = document.getElementById("btn-cool");

console.log(sword);

btnCool.addEventListener("click", attack)

sword.addEventListener("click", attack)

function attack (){
  console.log("Lancer une attaque normale!")
}
