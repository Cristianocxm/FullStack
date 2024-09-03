const mongoose = require("mongoose");
require("dotenv").config({path: "./src/.env"});


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connect");
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
};

module.exports = connectDB;