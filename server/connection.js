const mongoose = require("mongoose");

const connectDb = async (req, res) => {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    if(connection.STATES.connected) return console.log("Database connected");
    else if(connection.STATES.disconnected) return console.log("Database not connected");
};

module.exports = {connectDb}