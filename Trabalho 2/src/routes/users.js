const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
require("dotenv").config({patth: "./src/.env"});

const router = express.Router();

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg: "O usuário não existe"});
        }
        const payload = {userid: user.id};
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(201).json({token});

    } catch(err){
        res.status(500).json({error: err.message});
    }

});

module.exports = router;

