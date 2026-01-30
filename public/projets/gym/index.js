// Script pour la page "gym": gestion du slider, du menu burger et du texte du bouton

// Slider: pour chaque composant .slider-tabs, on récupère les slides et les onglets (tabs)
// Au clic sur un onglet, on désactive toutes les slides/onglets puis on active
// la slide correspondant à l'attribut data-slide de l'onglet cliqué
document.querySelectorAll('.slider-tabs').forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  const tabs = slider.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      slides.forEach(s => s.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));

      const slideIndex = tab.getAttribute('data-slide') - 1;
      slides[slideIndex].classList.add('active');
      tab.classList.add('active');
    });
  });
});


// Menu burger: attend que le DOM soit chargé, puis lie le clic sur l'icône burger
// pour basculer la classe "open" sur le menu de navigation (utile pour mobile)
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
});


// Texte du bouton responsive: met à jour le texte du bouton selon la largeur
// de la fenêtre pour améliorer l'affichage sur différents appareils
function updateButtonText() {
  const button = document.getElementById('action-button');
  const width = window.innerWidth;

  if (!button) return; // sécurité: si le bouton n'existe pas, on quitte

  if (width <= 600) {
    button.textContent = 'Play now!';
  } else if (width <= 1024) {
    button.textContent = 'Let’s play';
  } else {
    button.textContent = 'Let’s do it!';
  }
}

// Met à jour le texte au chargement et au redimensionnement de la fenêtre
window.addEventListener('resize', updateButtonText);
window.addEventListener('load', updateButtonText);