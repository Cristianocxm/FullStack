const { useRef } = require("react");
const userService = require('../services/Service');

// Cadastrar novo usuário
class UserController {
    async login(req, res) {
        const { email, password } = req.body;
    
        try {
            const token = await userService.login(email, password);
            res.status(200).json({ 
                message: "Login realizado com sucesso!", 
                token 
                
            });
        } catch (error) {
            res.status(401).json({ 
                message: error.message || "Credenciais inválidas." 
            }); 
        }
    }

    async store(req, res) {
        const { name, email, password } = req.body;
        try {
            const newUser = await userService.createUser({ name, email, password });
            res.status(201).json({ 
                message: "Usuário cadastrado com sucesso!", 
                user: newUser // Opcional: incluir os detalhes do usuário criado
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = { UserController };
