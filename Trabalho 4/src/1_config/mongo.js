const mongoose = require("mongoose");
require('dotenv').config({ path: "./src/.env" });

const connectMONGODB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { // Corrigido para `mongoose.connect`
            useNewUrlParser: true,
            useUnifiedTopology: true // Corrigido para `useUnifiedTopology`
        });
        console.log("MongoDB conectado.");
    } catch (error) { // Definindo `error` aqui
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1); // Usar `1` para indicar um erro
    }
};

module.exports = connectMONGODB;
