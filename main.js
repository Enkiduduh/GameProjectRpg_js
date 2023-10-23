//fichier js principale
import {vision, sword, shield, magic, bag, screenText,
  returnBtn, skill1, skill2, skill3,portraits_Overlay, attack, defense,
  openMenuMagic, CloseMenu, openMenuBag} from './module.js'

// Lancement de l'action Attaque
sword.addEventListener("click", attack)

// Lancement de l'action Défense
shield.addEventListener("click", defense)

// Ouverture du menu d'action : MAGIC
magic.addEventListener("click", openMenuMagic)

// Fermeture du menu d'action : Retour menu p.
returnBtn.addEventListener("click", CloseMenu)

// Ouverture du menu d'action : BAG
bag.addEventListener("click", openMenuBag)



// const playerOne = '{"id" : 1,  "name": "Korikoji",  "type": "Tank",  "lifepoint": 120,  "magicpoint": 40 }'
// const obj = JSON.parse(playerOne);

// let messageHero =`Your hero's name is ${obj.name}, he's a ${obj.type} with ${obj.lifepoint} PV.`
// console.log(messageHero)

const json1 = require('./players.json');
console.log(json1);

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // Expected output: 42

// console.log(obj.result);
// // Expected output: true
