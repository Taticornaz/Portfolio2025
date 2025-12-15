const button = document.querySelector("#btn");
const par = document.querySelector("#par");

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

button.addEventListener("click",() => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})