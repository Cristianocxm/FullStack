const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/userCrud');

connectDB();

app.use(express.json());

const authRoutes = require("./routes/users");
app.use("/api/auth", authRoutes);

const auth = require("./middleware/auth")

app.get("/api/user", auth, (req, res) => {
    res.json({msg: "Você está autenticado", userId: req.userId});
});

app.listen(3030, () => {
    console.log("Servidor rodando na porta 3030");
});


//Postgres
app.use('/api/users', userRoutes);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

