const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
dotenv.config({ path: ".env" });
const dbConnection = require("./config/database");
const productRoute = require("./routes/productRoute");

// Connect with db
dbConnection();

// express app
const app = express();

// Définir le dossier public comme dossier statique
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(express.json());

// Routes API
app.use("/api/v1/products", productRoute); // Assurez-vous que productRoute est correctement importé

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`App running running on port ${PORT}`);
});
