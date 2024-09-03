const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {
    const token = req.header("x-auth-token")
    if (!token) {
        return res.status(401).json({ msg: "Acesso negado" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId;
        next()
    } 
    catch (err) {
        res.status(400).json({msg: "Token inválido" })
    }
};