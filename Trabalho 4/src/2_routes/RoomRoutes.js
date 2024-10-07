const express = require('express');
const roomController = require('../4_controllers/RoomController');
const authMiddleware = require('../3_middlewares/userMid');

const RoomRouter = express.Router();

// Rotas protegidas por autenticação JWT
RoomRouter.post('/', authMiddleware, roomController.createRoom);  // Criação de sala
RoomRouter.get('/', authMiddleware, roomController.listRooms);    // Listagem de salas
RoomRouter.post('/join/:id', authMiddleware, roomController.joinRoom);  // Entrada em sala
RoomRouter.post('/leave/:id', authMiddleware, roomController.leaveRoom);

module.exports = RoomRouter;
