// Clé API pour OpenWeatherMap
const apiKey = '5dcc636de6003097026c9ac2efa0d09c';
// URL de base pour les requêtes météo
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Récupère les éléments du DOM
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

// Ajoute un écouteur d'événement au bouton de recherche
searchBtn.addEventListener('click', () => {
    // Récupère la valeur de l'input et supprime les espaces
    const city = cityInput.value.trim();
    if(city) {
        getWeather(city);
    } else {
        alert('Please enter a city name!');
    }
});

// Fonction asynchrone pour récupérer les données météo
async function getWeather(city) {
    try {
        // Effectue une requête fetch à l'API OpenWeatherMap
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        // Vérifie que la réponse est correcte
        if(!response.ok) throw new Error('City not found');
        // Convertit la réponse en JSON
        const data = await response.json();
        // Affiche les données météo
        displayWeather(data);
    } catch (err) {
        alert(err.message);
    }
}

// Fonction pour afficher les données météo sur la page
function displayWeather(data) {
    // Récupère la carte météo et l'affiche
    const card = document.getElementById('weatherCard');
    card.style.display = 'block';

    // Remplit les éléments du DOM avec les données météo
    document.getElementById('cityName').textContent = data.name + ', ' + data.sys.country;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temp').textContent = Math.round(data.main.temp);
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('wind').textContent = data.wind.speed;
}