// Effet de saisie (typing effect) : affiche et efface du texte lettre par lettre
// `texts` : tableau des chaînes à afficher séquentiellement
const texts = ["Frontend Developer", "Web Designer", "Creative Coder"]; 
// `count` : index de la chaîne courante dans `texts`
let count = 0;       
// `index` : position courante (nombre de caractères affichés)
let index = 0;       
// `currentText` : chaîne actuellement traitée
let currentText = "";
// `deleting` : indique si l'effet est en phase de suppression
let deleting = false; 

// Fonction principale qui gère l'ajout / la suppression d'un caractère
function type() {
    // On récupère la chaîne courante selon `count`
    currentText = texts[count];

    if (!deleting) {
        // Phase de saisie : afficher de 0 à index (inclus)
        document.querySelector(".typing-text").textContent = currentText.slice(0, index + 1);
        index++;

        // Si on a affiché toute la chaîne, passer en mode suppression
        if (index === currentText.length) {
            deleting = true;
            // Pause avant de commencer la suppression pour laisser lire la phrase
            setTimeout(type, 1500);
            return;
        }
    } else {
        // Phase de suppression : enlever un caractère à la fois
        document.querySelector(".typing-text").textContent = currentText.slice(0, index - 1);
        index--;

        // Quand tout est supprimé, revenir au mode saisie et avancer dans le tableau
        if (index === 0) {
            deleting = false;
            count = (count + 1) % texts.length; // boucle sur le tableau
        }
    }

    // Vitesse : plus rapide lors de la suppression, plus lente lors de la saisie
    setTimeout(type, deleting ? 50 : 120); 
}

// Lancer l'animation
type();
