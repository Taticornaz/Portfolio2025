/* ======================================
   Générateur de Citations Motivantes
   Projet: Portfolio 2025
   Description: Affiche une citation aléatoire au clic du bouton
   ====================================== */

// Sélection des éléments DOM
// - button: le bouton qui déclenche l'affichage des citations
// - par: le paragraphe où la citation sera affichée
const button = document.querySelector("#btn");
const par = document.querySelector("#par");

// Tableau contenant toutes les citations motivantes disponibles
// Chaque citation est accompagnée de son auteur
const quotes = [
     "« Je n'ai pas de rêve, j'ai un objectif. » — Harvey Specter",
  "« Les opportunités ne viennent pas à vous — vous les créez. » — Chris Grosser",
  "« Ce n'est pas tomber qui compte, c'est se relever. » — Vince Lombardi",
  "« Je n'ai pas échoué. J'ai juste trouvé 10 000 façons qui ne fonctionnent pas. » — Thomas Edison",
  "« N'abandonne jamais ce à quoi tu ne peux pas cesser de penser chaque jour. » — Harvey Specter",
  "« Je ne suis pas le résultat des circonstances. Je suis le résultat de mes choix. » — Stephen Covey",
  "« Donne toujours ton maximum. Ce que tu sèmes, tu le récolteras. » — Og Mandino",
  "« Quand on te pousse dans un coin, brise le mur. » — Harvey Specter"
]

// Écouteur d'événement au clic du bouton
button.addEventListener("click", () => {
    // Sélectionne une citation au hasard dans le tableau
    // Math.random() génère un nombre entre 0 et 1
    // Math.floor() l'arrondit vers le bas pour obtenir un index valide
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Rend le paragraphe visible
    par.style.display = "block";
    
    // Insère la citation dans le paragraphe
    par.textContent = randomQuote;
})