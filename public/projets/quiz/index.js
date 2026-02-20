// Récupération du conteneur principal du quiz
    const container = document.getElementById('quiz-container');
    // Tableau pour stocker les questions
    let questions = [];
    // Index de la question actuelle
    let currentIndex = 0;
    // Score de l'utilisateur
    let score = 0;

    // Fonction pour mélanger les réponses
    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    // Chargement des questions depuis l'API OpenTriviaDB
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
        questions = data.results;
        showQuestion();
      })
      .catch(err => {
        // Affichage du message d'erreur en cas d'échec
        container.innerHTML = '<h2>Error loading questions</h2>';
        console.error(err);
      });

    // Affichage de la question actuelle avec les options mélangées
    function showQuestion() {
      const q = questions[currentIndex];
      // Création d'un tableau avec la bonne réponse et les mauvaises réponses
      const options = shuffle([q.correct_answer, ...q.incorrect_answers]);
      container.innerHTML = `
        <h2>Question ${currentIndex + 1} sur ${questions.length}</h2>
        <p>${q.question}</p>
        ${options.map(o => `<button onclick="checkAnswer(this, '${q.correct_answer}')">${o}</button>`).join('')}
      `;
    }

    // Vérification de la réponse de l'utilisateur
    function checkAnswer(btn, correct) {
      // Désactivation de tous les boutons après la réponse
      const buttons = container.querySelectorAll('button');
      buttons.forEach(b => b.disabled = true);

      // Vérification si la réponse est correcte
      if(btn.textContent === correct) {
        btn.classList.add('correct');
        score++;
      } else {
        btn.classList.add('wrong');
        // Mise en évidence de la bonne réponse
        buttons.forEach(b => { if(b.textContent === correct) b.classList.add('correct'); });
      }

      // Passage à la question suivante après 1.2 secondes
      setTimeout(() => {
        currentIndex++;
        if(currentIndex < questions.length) {
          showQuestion();
        } else {
          showScore();
        }
      }, 1200);
    }

    // Affichage du résultat final du quiz
    function showScore() {
      container.innerHTML = `
        <h2>Quiz terminé!</h2>
        <p id="score">Votre résultat: ${score} sur ${questions.length}</p>
        <button onclick="restartQuiz()">Restart</button>
      `;
    }

    // Réinitialisation du quiz et rechargement des questions
    function restartQuiz() {
      currentIndex = 0;
      score = 0;
      fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
        .then(res => res.json())
        .then(data => {
          questions = data.results;
          showQuestion();
        });
    }