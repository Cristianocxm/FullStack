const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDatabase = require("./config/mongo"); // Corrigir o caminho do arquivo
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Conectar ao banco de dados
connectDatabase();

// Configurar rotas
app.use("/api", userRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
