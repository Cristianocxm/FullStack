const Room = require('../7_models/RoomModels');

class RoomRepository {
    async create(roomData) {
        const room = new Room(roomData);
        console.log("Sala criada:" + room)
        return await room.save();  // Salva a sala no MongoDB
    }

    async findAll() {
        return await Room.find();  // Retorna todas as salas de reunião
    }


    async getRoomById(id) {
        return await Room.findById(id);
    }

    async isRoomFull(roomId) {
        const room = await Room.findById(roomId);
        return room && room.participants.length >= room.capacity;
    }

    async addUserToRoom(roomId, userId) {
        const room = await Room.findById(roomId);
        if (!room) throw new Error('Sala não encontrada');

        if (!room.participants) {
            room.participants = []; // Inicializa a lista se não existir
        }

        room.participants.push(userId);
        await room.save();
    }

    async removeUserFromRoom(roomId, userId) {
        const room = await Room.findById(roomId);
        if (!room) throw new Error('Sala não encontrada');

        room.participants = room.participants.filter(participant => participant !== userId);
        await room.save();
    }

}

module.exports = new RoomRepository();
