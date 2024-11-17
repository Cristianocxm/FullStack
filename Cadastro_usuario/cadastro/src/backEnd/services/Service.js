const UserRepository = require('../repositories/Repository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: "./src/.env" });

class UserService {
    async login(email, password) {
        const user = await UserRepository.getUserByEmail(email);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Senha incorreta');
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }

    async createUser(userData) {
        const userExistente = await UserRepository.getUserByEmail(userData.email);
        if (userExistente) {
            throw new Error('Este e-mail já está sendo utilizado.');
        }
        return await UserRepository.create(userData);
    }

}

module.exports = new UserService();