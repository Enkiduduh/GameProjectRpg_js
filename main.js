//fichier js principale
import {vision, sword, shield, magic, bag, screenText,
  returnBtn, skill1, skill2, skill3, attack, defense,
  openMenuMagic, CloseMenuMagic} from './module.js'

// Lancement de l'action Attaque
sword.addEventListener("click", attack)

// Lancement de l'action Défense
shield.addEventListener("click", defense)

// Ouverture du menu d'action : MAGIC
magic.addEventListener("click", openMenuMagic)

// Fermeture du menu d'action : MAGIC
returnBtn.addEventListener("click", CloseMenuMagic)
