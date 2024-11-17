const express = require("express");
const { UserController } = require("../controllers/userController"); // Importar UserController

const router = express.Router();
const userController = new UserController(); // Criar uma instância do controlador

// Rota para login e cadastro
router.post('/login', userController.login);
router.post('/cadastro', userController.store);

module.exports = router;
