// Importer le module Express.js
const express = require('express');
// Importer le module 'path' pour manipuler les chemins de fichiers
const path = require('path');
// Créer une instance de l'application Express
const app = express();
// Définir le port sur lequel le serveur écoutera
const port = 3000;
// Configurer Express pour servir les fichiers statiques depuis le dossier 'public'
// __dirname est une variable globale de Node.js qui représente le chemin du répertoire du script en cours d'exécution
// path.join() est utilisé pour créer un chemin absolu vers le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap',express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
// Démarrer le serveur et le faire écouter sur le port spécifié
app.listen(port, () => {
// Callback exécuté une fois que le serveur est démarré
// Affiche un message dans la console pour indiquer que le serveur est en cours d'exécution
console.log(`Serveur lancé sur <http://localhost>:${port}`);
});
// Note : Ce serveur simple servira tous les fichiers statiques du dossier public'.
// Par exemple, si vous avez un fichier 'index.html' dans le dossier public',
// il sera accessible à l'adresse <http://localhost:3000/index.html>