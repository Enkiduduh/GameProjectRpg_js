//fichier js principale
import {vision, sword, shield, magic, bag, screenText,
  returnBtn, skill1, skill2, skill3,portraits_Player, attack, defense,
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

console.log(portraitPlayer)
