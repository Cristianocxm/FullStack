const express = require("express");
const { UserController } = require("../controllers/userController"); // Importar UserController
const authenticateJWT = require('../middlewares/Mid');

const router = express.Router();
const userController = new UserController(); // Criar uma instância do controlador

// Rota para login e cadastro
router.post('/login', userController.login);
router.post('/cadastro', userController.store);
router.post('/profile', authenticateJWT, userController.login);

module.exports = router;
