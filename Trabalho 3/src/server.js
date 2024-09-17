const express = require("express");
const connectMongo = require("./config/mongo");
const app = express();

app.use(express.json());

connectMongo();

/*app.get("/", (request, response)=>{
    response.send({message: "Hello word"})
});*/

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000.")
});




//server.js
//mongo.js
//server.js