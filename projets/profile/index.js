

// Sélection des éléments DOM
const messageBtn = document.getElementById('messageBtn');
const messageForm = document.getElementById('messageForm');
const form = document.getElementById('form');
const successMsg = document.getElementById('successMsg');

// Écouteur d'événement au clic du bouton message
// Bascule la visibilité du formulaire en ajoutant/retirant la classe 'hidden'
messageBtn.addEventListener('click', () => {
  messageForm.classList.toggle('hidden');
});

// Écouteur d'événement pour la soumission du formulaire
form.addEventListener('submit', (e) => {
  // Empêche le comportement par défaut du formulaire
  e.preventDefault(); 

  // Récupère les valeurs du sujet et du message
  const subject = form.subject.value;
  const message = form.message.value;

  // Affiche le message dans la console (à titre informatif)
  console.log("Отправлено сообщение:", subject, message);

  // Affiche le message de succès en retirant la classe 'hidden'
  successMsg.classList.remove('hidden');

  // Réinitialise les champs du formulaire
  form.reset();

  // Cache le message de succès après 3 secondes
  setTimeout(() => successMsg.classList.add('hidden'), 3000);
});